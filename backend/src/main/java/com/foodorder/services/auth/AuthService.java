package com.foodorder.services.auth;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;
import com.foodorder.models.user.userModel.User;
import com.foodorder.repositories.UserRepository;
import com.foodorder.services.security.JwtService;

@Service
public class AuthService implements IAuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Override
    public String register(UserRegister user) {
        Optional<User> result = userRepository.findByEmail(user.getEmail());
        if(result.isPresent())
        {
          return "user already exist";
        }
          User newUser = new User();
          BeanUtils.copyProperties(user, newUser);
          /* newUser.setRole("User"); */
          String encodingPassword = new BCryptPasswordEncoder(12).encode(user.getPassword());
          newUser.setPassword(encodingPassword);
          User resultUser =  userRepository.save(newUser);
          System.out.println("Register func -> return data from save func -> "+resultUser);
          return "register is success";
    }

    @Override
    public String login(UserLogin user) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        Authentication authentication =  authenticationManager.authenticate(token);
        if(!authentication.isAuthenticated())
        {
           return "login is faild";
        }
        String jwtToken = jwtService.generateJWT(user.getEmail());
        return "login is success and token : "+jwtToken;
    }
    
}
