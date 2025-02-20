package com.foodorder.base.response;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class BaseController {
    
    public  ResponseEntity<Response> okResponse(int statusCode, Map<String, ?> data) {
         Response resData = new Response(statusCode, data, null);  
         return ResponseEntity.ok().body(resData);
    }

    public  ResponseEntity<Response> okResponse(Map<String, ?> data) {
        Response resData = new Response(HttpStatus.OK.value(), data, null);  
        return ResponseEntity.ok().body(resData);
   } 

    public ResponseEntity<Response> errorResponse(int statusCode, Map<String, ?> data) {
        Response resData = new Response(statusCode,null, data);
        return ResponseEntity.badRequest().body(resData);
    } 

    public ResponseEntity<Response> errorResponse(Map<String, ?> data) {
        Response resData = new Response(HttpStatus.BAD_REQUEST.value(),null, data);
        return ResponseEntity.badRequest().body(resData);
    } 

}
