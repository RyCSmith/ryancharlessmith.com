package com.ryancharlessmith;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    // @RequestMapping(value="/legacy")
    // public String homepage(Model model) {
    //     return "index";
    // }

    @RequestMapping({"/", "/about", "/experience","/projects/**", "/contact"})
    public String test(Model model, HttpServletRequest request) {
        System.out.println(request.getRequestURI());
        return "page";
    }
    
    

}
