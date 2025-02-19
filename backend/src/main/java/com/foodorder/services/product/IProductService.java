package com.foodorder.services.product;

import java.util.Map;

import com.foodorder.models.product.productDTOModel.IUDTOProduct;

public interface IProductService {
    
     Map<String,?> getAllProduct();

     Map<String,?> addProduct(IUDTOProduct product);

     Map<String,?> updateProduct(String productId,IUDTOProduct product);

     Map<String,?> deleteProduct(String productId);

}
