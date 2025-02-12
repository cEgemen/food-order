package com.foodorder.controllers.Auth;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;

public interface IAuth {

     String register(UserRegister user);
     String login(UserLogin user);
    
} 
