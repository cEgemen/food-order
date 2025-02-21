package com.foodorder.services.order;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.foodorder.base.Enums.ErrorsEnum;
import com.foodorder.base.errors.CustomException;
import com.foodorder.models.orders.orderDTOModel.DTOOrder;
import com.foodorder.models.orders.orderDTOModel.IUDTOOrder;
import com.foodorder.models.orders.orderModel.Order;
import com.foodorder.models.user.userModel.User;
import com.foodorder.models.user.userModel.UserPrinciple;
import com.foodorder.repositories.order.OrderRepository;
import com.foodorder.repositories.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService {

    private final OrderRepository repository;

    private final UserRepository userRepository;

    @Override
    public Map<String, ?> getAllOrders() {
       List<Order> orders = repository.findAll();
       List<DTOOrder> dtoOrders = new ArrayList<>();
       for(Order order : orders)
       {
           DTOOrder dtoOrder = new DTOOrder();
           BeanUtils.copyProperties(order, dtoOrder);
           dtoOrders.add(dtoOrder);
       }
       return Map.of("message","all fetching orders is success.","orders",dtoOrders);
    }

    @Override
    public Map<String, ?> getOrder(String orderId) {
       Optional<Order> result = repository.findById(orderId);
       if(!result.isPresent())
       {
          throw new CustomException(ErrorsEnum.ORDER_NOT_FOUND);
       }
       DTOOrder dtoOrder = new DTOOrder();
       BeanUtils.copyProperties(result.get(),dtoOrder);
       return Map.of("message","fetching order is success.","order",dtoOrder);
    }

    @Override
    public Map<String, ?> getOrders(String id) {
      List<DTOOrder> resultDtoOrders = new ArrayList<>();
      List<Order> result = repository.findByOrderOwner(id);
      Optional<User> resUser = userRepository.findById(id);
      if(!resUser.isPresent())
      {
          throw new CustomException(ErrorsEnum.USER_NOT_FOUND);
      }
      else
      {
         User owner = resUser.get();
         System.out.println("result : "+result);
         for(Order order : result)
          { 
           DTOOrder newDtoOrder = new DTOOrder();
           BeanUtils.copyProperties(order,newDtoOrder);
           newDtoOrder.setOrder_owner(owner);
           resultDtoOrders.add(newDtoOrder);
          }
      }
       return Map.of("message","fetching order is success.","orders",resultDtoOrders);
    }

    @Override
    public Map<String, ?> addOrder(IUDTOOrder order) {
       Order newOrder = new Order();
       User authUser = ((UserPrinciple)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUser();
       BeanUtils.copyProperties(order,newOrder); 
       newOrder.setOrder_owner(authUser.getId());
       Order retOrder = repository.save(newOrder);
       return Map.of("message","order added successful.","order_id",retOrder.getId());
    }

    @Override
    public Map<String, ?> updateOrder(String orderId, IUDTOOrder order) {
        Order updateOrder = new Order()
                                .setId(orderId)
                                .setTotal(order.getTotal())
                                .setStatus(order.getStatus());
        repository.save(updateOrder);                        
        return Map.of("message","order updated successful.");
    }

    @Override
    public Map<String, ?> deleteOrder(String orderId) {
        repository.deleteById(orderId);
       return Map.of("message","order deleted successful.");
    }
    
}
