package com.ryancharlessmith.mail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import com.ryancharlessmith.mail.data.MailRequest;
import com.ryancharlessmith.mail.client.MailClient;

@Controller
public class MailController {

	@Autowired
    private MailClient mailClient;
    
    @RequestMapping(value="/receivemail", method = RequestMethod.POST)
    public ResponseEntity receiveMailll(@RequestBody MailRequest request){
    	try {
    		mailClient.relay(request);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		} 
    	return new ResponseEntity(HttpStatus.OK);
    }
}
