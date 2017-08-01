package com.ryancharlessmith;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {

    @RequestMapping(value="/")
    public String homepage(Model model) {
        return "index";
    }
    @RequestMapping(value="/receivemail", method = RequestMethod.POST)
    public ResponseEntity receiveMail(Model model,
    		@RequestParam(value="name", required=false, defaultValue="Not Provided") String name, 
    		@RequestParam(value="email", required=false, defaultValue="Not Provided") String email,
    		@RequestParam(value="message", required=false, defaultValue="Not Provided") String message) {
    	try {
			new MailinEdited().relay(name, email, message);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		} 
    	return new ResponseEntity(HttpStatus.OK);
    }

}
