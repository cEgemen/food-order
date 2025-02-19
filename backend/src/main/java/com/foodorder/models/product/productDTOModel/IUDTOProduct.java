package com.foodorder.models.product.productDTOModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IUDTOProduct {

   private String name;

   private float price;

   private String image;
    
}
