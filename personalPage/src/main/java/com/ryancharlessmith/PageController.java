package com.ryancharlessmith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import javax.servlet.http.HttpServletRequest;

@Controller
public class PageController {

    @RequestMapping(value="/")
    public String homepage(Model model) {
        return "index";
    }

    @RequestMapping(value="/test/**")
    public String test(Model model, HttpServletRequest request) {
        System.out.println(request.getRequestURI());
        return "test";
    }
    
    @Autowired
    private MailinEdited mailin;
    
    @RequestMapping(value="/receivemail", method = RequestMethod.POST)
    public ResponseEntity receiveMail(Model model,
    		@RequestParam(value="name", required=false, defaultValue="Not Provided") String name, 
    		@RequestParam(value="email", required=false, defaultValue="Not Provided") String email,
    		@RequestParam(value="message", required=false, defaultValue="Not Provided") String message) {
    	try {
    		mailin.relay(name, email, message);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		} 
    	return new ResponseEntity(HttpStatus.OK);
    }

}
