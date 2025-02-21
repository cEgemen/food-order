package com.foodorder.services.order;

import java.util.Map;
import com.foodorder.models.orders.orderDTOModel.IUDTOOrder;

public interface IOrderService {

    Map<String,?> getAllOrders();

    Map<String,?> getOrder(String orderId);

    Map<String,?> getOrders(String id);

    Map<String,?> addOrder(IUDTOOrder order);

    Map<String,?> updateOrder(String orderId,IUDTOOrder order);

    Map<String,?> deleteOrder(String orderId);
}
