package com.foodorder.Confs;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.foodorder.base.errors.CustomException;
import com.foodorder.base.response.BaseController;
import com.foodorder.base.response.Response;

@ControllerAdvice
public class GlobalExceptionHandler  extends BaseController {
    
     @ExceptionHandler(MethodArgumentNotValidException.class)
      public ResponseEntity<Response> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception)
      {
        Map<String , Object> errData = Map.of("message","valid exception");
        return errorResponse(0, errData);
      }

      @ExceptionHandler(CustomException.class)
      public ResponseEntity<Response> handleCustomException(CustomException exception)
      {
          Map<String,Object> errData = Map.of("message",exception.getMessage());  
          return errorResponse(exception.getStatusCode(), errData);
      }

      @ExceptionHandler(Exception.class)
      public ResponseEntity<Response> handleException(Exception exception)
      {
          Map<String,Object> errData = Map.of("message","An error occurred.");  
          return errorResponse(500, errData);  
      }
}
