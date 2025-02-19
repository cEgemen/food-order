package com.foodorder.controllers.product;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.base.response.IResponse;
import com.foodorder.base.response.Response;
import com.foodorder.models.product.productDTOModel.IUDTOProduct;
import com.foodorder.services.product.ProductService;

@RestController
@RequestMapping("/api/product/")
public class ProductController extends IResponse  implements IProductController {

    @Autowired
    private ProductService service;

    @Override
    @GetMapping("allProducts")
    public ResponseEntity<Response> getAllProduct() {
        Map<String,?> result = service.getAllProduct();
        return okResponse(result);
    }

    @Override
    @GetMapping("{id}")
    public ResponseEntity<Response> getProduct(@PathVariable String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getByIdProduct'");
    }

    @Override
    @PostMapping("addProduct")
    public ResponseEntity<Response> addProduct(@RequestBody IUDTOProduct product) {
        Map<String,?> result = service.addProduct(product);
        return okResponse(result);
    }

    @Override
    @PutMapping("updateProduct/{id}")
    public ResponseEntity<Response> updateProduct(@PathVariable String id,@RequestBody IUDTOProduct product) {
        Map<String,?> result = service.updateProduct(id, product);
        return okResponse(result);
    }

    @Override
    @DeleteMapping("deleteProduct/{id}")
    public ResponseEntity<Response> deleteProduct(@PathVariable String id) {
        Map<String,?> result = service.deleteProduct(id);
        return okResponse(result);
    }
  
}
