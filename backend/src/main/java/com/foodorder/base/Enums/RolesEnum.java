package com.foodorder.base.Enums;

public enum RolesEnum {
     ADMIN("admin"),USER("user");

     private String role;

     public String getRole(){
         return this.role;
     }

     private RolesEnum(String role)
     {
         this.role = role;
     }
}
