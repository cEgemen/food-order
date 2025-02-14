package com.foodorder.controllers.Auth;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.base.response.IResponse;
import com.foodorder.base.response.Response;
import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;
import com.foodorder.services.auth.AuthService;

@RestController
@RequestMapping("/api/auth/")
public class Auth extends IResponse implements IAuth{

    @Autowired
    private AuthService authService;

    @Override @PostMapping("signUp")
    public ResponseEntity<Response> register(@RequestBody UserRegister user) {
       Map<String,?> okData = authService.register(user);
       return okResponse(okData);
    }

    @Override @PostMapping("signIn")
    public ResponseEntity<Response> login(@RequestBody UserLogin user) {
        Map<String,?> okData = authService.login(user);
        return okResponse(okData);
    }
    
}
