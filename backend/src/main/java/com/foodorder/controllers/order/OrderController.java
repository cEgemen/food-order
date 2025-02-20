package com.foodorder.controllers.order;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.base.response.BaseController;
import com.foodorder.base.response.Response;
import com.foodorder.models.orders.orderDTOModel.IUDTOOrder;
import com.foodorder.services.order.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order/")
@RequiredArgsConstructor
public class OrderController extends BaseController implements IOrderController {

    private final OrderService service;

    @Override
    @GetMapping("allOrders")
    public ResponseEntity<Response> getAllOrders() {
        Map<String , ?> okData = service.getAllOrders();
        return okResponse(okData);
    }

    @Override
    @GetMapping("{id}")
    public ResponseEntity<Response> getOrder(@PathVariable String orderId) {
        Map<String,?> okData = service.getOrder(orderId);
        return okResponse(okData);
    }

    @Override
    @PostMapping("addOrder")
    public ResponseEntity<Response> addOrder(@RequestBody IUDTOOrder order) {
        Map<String,?> okData = service.addOrder(order);
        return okResponse(okData);
    }

    @Override
    @PutMapping("updateOrder/{id}")
    public ResponseEntity<Response> updateOrder(@PathVariable String orderId,@RequestBody IUDTOOrder order) {
        Map<String,?> okData = service.updateOrder(orderId, order);
        return okResponse(okData);
    }

    @Override
    @DeleteMapping("deleteOrder/{id}")
    public ResponseEntity<Response> deleteOrder(@PathVariable String orderId) {
        Map<String,?> okData = service.deleteOrder(orderId);
        return okResponse(okData);
    }

  
    
}
