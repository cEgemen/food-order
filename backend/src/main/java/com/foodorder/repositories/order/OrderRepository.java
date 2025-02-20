package com.foodorder.repositories.order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foodorder.models.orders.orderModel.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order,String> {
    
}
