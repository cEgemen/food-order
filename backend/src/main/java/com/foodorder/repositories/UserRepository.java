package com.foodorder.repositories;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.foodorder.models.user.userModel.User;

public interface UserRepository extends MongoRepository<User,String> {

         Optional<User>  findByEmail(String email);

}
