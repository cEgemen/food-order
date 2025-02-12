package com.foodorder.controllers.Auth;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;

@RestController
@RequestMapping("/api/auth/")
public class Auth implements IAuth{

    @Override @PostMapping("signUp")
    public String register(@RequestBody UserRegister user) {
        return "succesfult signUp";
    }

    @Override @PostMapping("signIn")
    public String login(@RequestBody UserLogin user) {
        return "succesfult signIn";
    }
    
}
