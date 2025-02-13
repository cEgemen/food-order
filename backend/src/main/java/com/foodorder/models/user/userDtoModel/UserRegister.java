package com.foodorder.models.user.userDtoModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegister {
    
    private String username;

    private String email;

    private String password ;

    private String role;

}
