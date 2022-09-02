package com.team10.preproject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
//    @Value("${config.domain}")
//    private String domain;
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins(domain).allowedMethods("GET", "POST", "OPTIONS", "DELETE", "PATCH").allowCredentials(true)
//                .exposedHeaders("authorization");
//    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
//             .allowedOrigins("http://localhost:8080",
//                         "http://localhost:3000",
//                         "https://localhost:3000",
//                         "https://127.0.0.1:3000"
//                 )
                .exposedHeaders("authorization")
                .allowedOriginPatterns("*")
                .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");

    }
}
