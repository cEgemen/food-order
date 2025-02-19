package com.foodorder.controllers.auth;

import org.springframework.http.ResponseEntity;

import com.foodorder.base.response.Response;
import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;

public interface IAuthController {

     ResponseEntity<Response> register(UserRegister user);
     ResponseEntity<Response> login(UserLogin user);
    
} 
