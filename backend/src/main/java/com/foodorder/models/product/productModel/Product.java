package com.foodorder.models.product.productModel;

import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Document("Products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
public class Product {
    
   @MongoId(targetType = FieldType.OBJECT_ID) 
   private String id;

   private String name;

   private float price;

   private String image;

   @CreatedDate
   private Instant createDate;

   @LastModifiedDate
   private Instant updateDate;

}
