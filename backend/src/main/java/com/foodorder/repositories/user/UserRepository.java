package com.foodorder.repositories.user;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foodorder.models.user.userModel.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {

         Optional<User>  findByEmail(String email);

}
