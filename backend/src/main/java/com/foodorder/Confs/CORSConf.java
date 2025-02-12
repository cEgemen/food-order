package com.foodorder.Confs;

import java.util.List;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Component
public class CORSConf implements CorsConfigurationSource {

    @Override
    @Nullable
    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
        CorsConfiguration cors = new CorsConfiguration();
                          cors.setAllowedOrigins(List.of("*"));
                          cors.setAllowedHeaders(List.of("*"));
                          cors.setAllowedMethods(List.of("PUT","DELETE","POST","GET","OPTIONS"));
        return cors;
    }
    
}
