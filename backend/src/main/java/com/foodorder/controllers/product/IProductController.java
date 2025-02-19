package com.foodorder.controllers.product;

import org.springframework.http.ResponseEntity;

import com.foodorder.base.response.Response;
import com.foodorder.models.product.productDTOModel.IUDTOProduct;

public interface IProductController {

    ResponseEntity<Response> getAllProduct();

    ResponseEntity<Response> getProduct(String id);

    ResponseEntity<Response> addProduct(IUDTOProduct product);
    
    ResponseEntity<Response> updateProduct(String id,IUDTOProduct product);
    
    ResponseEntity<Response> deleteProduct(String id);

}
