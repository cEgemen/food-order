package com.foodorder.models.user.userModel;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import com.foodorder.base.Enums.RolesEnum;

import lombok.Data;

@Data
@Document(collection = "Users")
public class User {
 
    @MongoId(targetType = FieldType.OBJECT_ID)
    private String id;

    private String username;

    @Indexed(unique = true)
    private String email;

    private String password;

    /* @Field(targetType = FieldType.STRING)
    private RolesEnum role; */
    private String role;
}
