package com.foodorder.services.auth;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.foodorder.base.Enums.ErrorsEnum;
import com.foodorder.base.errors.CustomException;
import com.foodorder.models.user.userDtoModel.UserLogin;
import com.foodorder.models.user.userDtoModel.UserRegister;
import com.foodorder.models.user.userModel.User;
import com.foodorder.repositories.UserRepository;
import com.foodorder.services.security.JwtService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AuthService implements IAuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Override
    public Map<String,?> register(UserRegister user) {
        log.info("userRegister : "+user);
        Optional<User> result = userRepository.findByEmail(user.getEmail());
        log.info("findByEmail : "+result);
        if(result.isPresent())
        {
          throw new CustomException(ErrorsEnum.USER_ALREADY_EXIST);
        }
          User newUser = new User();
          BeanUtils.copyProperties(user, newUser);
          /* newUser.setRole("User"); */
          String encodingPassword = new BCryptPasswordEncoder(12).encode(user.getPassword());
          newUser.setPassword(encodingPassword);
          User resultUser =  userRepository.save(newUser);
          System.out.println("Register func -> return data from save func -> "+resultUser);
          return Map.of("message",user.getUsername() + " is  registered succesfuly.");
    }

    @Override
    public Map<String,?> login(UserLogin user) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        Authentication authentication =  authenticationManager.authenticate(token);
        if(!authentication.isAuthenticated())
        {
           throw new CustomException(ErrorsEnum.USER_NOT_FOUND);
        }
        String jwtToken = jwtService.generateJWT(user.getEmail());
        return Map.of("message","login is succesful","token",jwtToken);
    }
    
}
