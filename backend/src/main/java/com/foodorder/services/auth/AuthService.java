package com.foodorder.services.auth;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;
import com.foodorder.models.user.userModel.User;
import com.foodorder.repositories.UserRepository;

public class AuthService implements IAuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String register(UserRegister user) {
        Optional<User> result = userRepository.findByEmail(user.getEmail());
        if(result.isPresent())
        {
          return "user already exist";
        }
          User newUser = new User();
          BeanUtils.copyProperties(user, newUser);
          newUser.setRole("User");
          String encodingPassword = new BCryptPasswordEncoder(12).encode(user.getPassword());
          newUser.setPassword(encodingPassword);
          User resultUser =  userRepository.save(newUser);
          System.out.println("Register func -> return data from save func -> "+resultUser);
          return "register is success";
    }

    @Override
    public String login(UserLogin user) {
        
        return "login is success";
    }
    
}
