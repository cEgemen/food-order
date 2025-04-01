package com.foodorder.repositories.order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.foodorder.models.orders.orderModel.Order;
import java.util.List;


@Repository
public interface OrderRepository extends MongoRepository<Order,String> {
    
    @Query("{ 'order_owner' : ?0, 'status' : { $in: ?1 } }")
    List<Order> findByOrderOwner(String id,List<String> inList);



}
