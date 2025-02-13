package com.foodorder.Confs;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.foodorder.services.security.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    JwtService jwtService ;

    @Autowired
    UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
          String authorizationHeader = request.getHeader("Authorization");
          String token;
          String email;
         if(authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
         {
            token = authorizationHeader.substring(7);
            email = jwtService.extractEmail(token);
            if(SecurityContextHolder.getContext().getAuthentication() == null && jwtService.isValidedJwt(token, email) )
            {
               UserDetails userDetail = userDetailsService.loadUserByUsername(email); 
               UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetail,null ,userDetail.getAuthorities());
                                                  authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
               SecurityContextHolder.getContext().setAuthentication(authToken);                                  
            }
         }
              filterChain.doFilter(request, response);
    }
    
}
