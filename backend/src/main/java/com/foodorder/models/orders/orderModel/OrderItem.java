package com.foodorder.models.orders.orderModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderItem {
    
    private String id;

    private String size;
    
    private int quantity;
 
    private float price;

    private String image;

    private String name;
}
