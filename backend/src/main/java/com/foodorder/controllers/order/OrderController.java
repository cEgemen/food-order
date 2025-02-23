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
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/order/")
@RequiredArgsConstructor
@Slf4j
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
    public ResponseEntity<Response> getOrder(@PathVariable String id) {
        Map<String,?> okData = service.getOrder(id);
        return okResponse(okData);
    }

    @Override
    @GetMapping("user/{id}")
    public ResponseEntity<Response> getOrders(@PathVariable String id) {
        Map<String,?> okData = service.getOrders(id);
        return okResponse(okData);
    }  

    @Override
    @PostMapping("addOrder")
    public ResponseEntity<Response> addOrder(@RequestBody IUDTOOrder order) {
        log.info("order : "+order);
        Map<String,?> okData = service.addOrder(order);
        return okResponse(okData);
    }

    @Override
    @PutMapping("updateOrder/{id}")
    public ResponseEntity<Response> updateOrder(@PathVariable String id,@RequestBody IUDTOOrder order) {
        Map<String,?> okData = service.updateOrder(id, order);
        return okResponse(okData);
    }

    @Override
    @DeleteMapping("deleteOrder/{id}")
    public ResponseEntity<Response> deleteOrder(@PathVariable String orderId) {
        Map<String,?> okData = service.deleteOrder(orderId);
        return okResponse(okData);
    }
    
}
