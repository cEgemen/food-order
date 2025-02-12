package com.foodorder.controllers.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;
import com.foodorder.services.auth.AuthService;

@RestController
@RequestMapping("/api/auth/")
public class Auth implements IAuth{

    @Autowired
    private AuthService authService;

    @Override @PostMapping("signUp")
    public String register(@RequestBody UserRegister user) {
        return authService.register(user);
    }

    @Override @PostMapping("signIn")
    public String login(@RequestBody UserLogin user) {
        return authService.login(user);
    }
    
}
