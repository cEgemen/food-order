package com.foodorder.repositories.product;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foodorder.models.product.productModel.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product,String> {
    
}
