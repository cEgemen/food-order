package com.foodorder.models.orders.orderDTOModel;

import java.util.List;
import com.foodorder.models.orders.orderModel.OrderItem;
import com.foodorder.models.user.userModel.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IUDTOOrder {
 
   private float total;

   private String status;
   
   private User order_owner;

   private List<OrderItem> order_items;

}
