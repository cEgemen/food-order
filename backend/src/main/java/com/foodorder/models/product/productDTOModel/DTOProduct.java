package com.foodorder.models.product.productDTOModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DTOProduct {
    
    private String id;

    private String name;

    private String image;

    private float price;

}
