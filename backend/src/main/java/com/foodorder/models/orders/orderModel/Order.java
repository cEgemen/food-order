package com.foodorder.models.orders.orderModel;

import java.time.Instant;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Accessors(chain = true)
@Document(collection = "Orders")
public class Order {

   @MongoId(targetType = FieldType.OBJECT_ID)
   private String id;

   private float total;

   private String status;
 
   @CreatedDate
   private Instant createDate;

   @LastModifiedDate
   private Instant updateDate;
   
   @Indexed
   private String order_owner;

   private List<OrderItem> order_items;
}
