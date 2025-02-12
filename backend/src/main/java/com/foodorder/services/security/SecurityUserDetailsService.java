package com.foodorder.services.security;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.foodorder.models.user.userModel.User;
import com.foodorder.models.user.userModel.UserPrinciple;
import com.foodorder.repositories.UserRepository;

public class SecurityUserDetailsService implements UserDetailsService {

     @Autowired
     private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    
       Optional<User> result = userRepository.findByEmail(username);
         if(!result.isPresent())
         {
             throw new UsernameNotFoundException("User not dound");
         } 
         User user = result.get();
         return new UserPrinciple(user);
    }
    
}
