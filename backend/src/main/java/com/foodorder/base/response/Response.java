package com.foodorder.base.response;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    
    private int status_code;
    private Map<String,?> ok_data;
    private Map<String,?> error_data;

}

