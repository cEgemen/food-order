package com.foodorder.models.orders.orderModel;

import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import com.foodorder.models.product.productModel.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderItem {
    
    @MongoId(targetType = FieldType.OBJECT_ID)
    private String id;

    private String order_id;

    private String size;
    
    private int quantity;

    private String product_id;
 
    private Product product;
}
