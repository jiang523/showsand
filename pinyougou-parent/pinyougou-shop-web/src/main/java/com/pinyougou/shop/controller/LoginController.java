package com.pinyougou.shop.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author jiangwc33446
 * @doc 登录控制器
 */
@RestController
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/name")
    public Map<String,String> getLoginName(){
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        Map<String,String> userMap = new HashMap<>(16);
        userMap.put("loginName",name);
        return userMap;
    }
}
