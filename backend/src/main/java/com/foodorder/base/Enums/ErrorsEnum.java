package com.foodorder.base.Enums;

public enum ErrorsEnum {
     
    USER_NOT_FOUND("User not found !",404),USER_ALREADY_EXIST("User already exist !",409);
  
    private  String message; 
    private  int statusCode;

    public String getMessage(){
          return message;
    }

    public int getStatusCode()
    {
         return statusCode;
    }
  
   ErrorsEnum(String message,int statusCode)
    {
       this.message = message;
       this.statusCode = statusCode;
    }

   

}
