package com.foodorder.services.product;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodorder.models.product.productDTOModel.DTOProduct;
import com.foodorder.models.product.productDTOModel.IUDTOProduct;
import com.foodorder.models.product.productModel.Product;
import com.foodorder.repositories.product.ProductRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProductService implements IProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public Map<String, ?> getAllProduct() {
        List<Product> products = repository.findAll();
        List<DTOProduct> dtoProductList = new ArrayList<>();
        for(Product product : products)
        {
             DTOProduct dtoProduct = new DTOProduct();
             BeanUtils.copyProperties(product,dtoProduct);
             dtoProductList.add(dtoProduct);
        }
        return Map.of("message","fetching is success.","products",dtoProductList);
    }

    @Override
    public Map<String, ?> addProduct(IUDTOProduct product) {
         Product newProduct = new Product()
                                         .setName(product.getName())
                                         .setPrice(product.getPrice())
                                         .setImage(product.getImage());
        Product resultProduct = repository.save(newProduct);     
        log.info("save product : "+resultProduct.toString());                            
        return Map.of("message","product added is success.");                                 
    }

    @Override
    public Map<String, ?> updateProduct(String productId,IUDTOProduct product) {
        Product newProduct = new Product()
                                         .setId(productId)
                                         .setName(product.getName())
                                         .setPrice(product.getPrice());
         Product resultProduct = repository.save(newProduct);     
         log.info("update product : "+resultProduct);                            
         return Map.of("message","product updated is success.");                                 
    }

    @Override
    public Map<String, ?> deleteProduct(String productId) {
        repository.deleteById(productId);
        log.info("delete product("+productId+")");                           
        return Map.of("message","product deleted success.");
    }
    
}
