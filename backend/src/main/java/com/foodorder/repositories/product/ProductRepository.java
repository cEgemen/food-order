package com.foodorder.repositories.product;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.foodorder.models.product.productModel.Product;

public interface ProductRepository extends MongoRepository<Product,String> {
    
}
