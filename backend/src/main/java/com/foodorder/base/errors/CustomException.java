package com.foodorder.base.errors;

import com.foodorder.base.Enums.ErrorsEnum;

public class CustomException extends RuntimeException {
 
    private  String message = "An error occurred.";
    private  int statusCode = 500;

   public CustomException()
    {
         super("An error occurred.");
    }

   public CustomException(ErrorsEnum error)
    {
        super(error.getMessage());
        this.message = error.getMessage();
        this.statusCode = error.getStatusCode();
    }
 
    

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatusCode() {
        return this.statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
 
    
}
