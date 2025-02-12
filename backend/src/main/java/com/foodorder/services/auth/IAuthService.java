package com.foodorder.services.auth;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;

public interface IAuthService {
    
     String register(UserRegister user);

     String login(UserLogin user);

}
