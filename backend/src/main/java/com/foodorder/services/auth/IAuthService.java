package com.foodorder.services.auth;

import java.util.Map;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;

public interface IAuthService {
    
     Map<String,?> register(UserRegister user);

     Map<String,?> login(UserLogin user);

}
