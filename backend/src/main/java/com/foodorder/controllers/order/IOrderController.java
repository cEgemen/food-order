package com.foodorder.controllers.order;

import org.springframework.http.ResponseEntity;

import com.foodorder.base.response.Response;
import com.foodorder.models.orders.orderDTOModel.IUDTOOrder;

public interface IOrderController {

    ResponseEntity<Response> getAllOrders();

    ResponseEntity<Response> getOrder(String orderId);

    ResponseEntity<Response> getOrders(String id);

    ResponseEntity<Response> addOrder(IUDTOOrder order);

    ResponseEntity<Response> updateOrder(String orderId,IUDTOOrder order);

    ResponseEntity<Response> deleteOrder(String orderId);
}
