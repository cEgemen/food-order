package com.foodorder.services.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtService {

    @Value("${EXPIRATION_TIME}")
    private long EXPIRATION_TIME;

    @Value("${SECRET_KEY}")
    private String SECRET_KEY;

    public String generateJWT(String userEmail){
          Map<String , Object> claims = new HashMap<>();
          return generateJWT(claims, userEmail);
    }

    public String generateJWT(Map<String,Object> claims,String userEmail) {
        
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userEmail)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSecretKey(),SignatureAlgorithm.HS256)
                .compact();
    }

    private SecretKey getSecretKey()
    {
         byte [] byteSecretKey = SECRET_KEY.getBytes();
         return Keys.hmacShaKeyFor(byteSecretKey); 
    }

    public String extractEmail(String token) {
        return extractClaims(token,(claims) -> claims.getSubject());
    }

    private Date extractExpirationTime(String token)
    {
        return extractClaims(token, claims -> claims.getExpiration());
    }

    public boolean isValidedJwt(String token , String email)
    {
        boolean isExpirationTimeOk = extractExpirationTime(token).before(new Date());
        boolean isEmailMatch = extractEmail(token).equals(email);
        return isEmailMatch && !isExpirationTimeOk;
    }

    private <T> T extractClaims(String token , Function<Claims, T> claimsResolver)
    {
       Claims claims = extractAllClaims(token);
       return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token)
    {
         return Jwts.parserBuilder()
                    .setSigningKey(getSecretKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    }
    
}
