package com.ryancharlessmith.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ryancharlessmith.MailRequest;
import com.ryancharlessmith.MailinEdited;

@RestController
public class MailController {

	@Autowired
    private MailinEdited mailin;
	
//	@RequestMapping(value="/receivemailll", method = RequestMethod.POST)
//    public ResponseEntity receiveMailll(MailRequest request){
//    	try {
//    		mailin.relay(request.getName(), request.getEmail(), request.getMessage());
//		} catch (Exception e) {
//			e.printStackTrace();
//			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
//		} 
//    	return new ResponseEntity(HttpStatus.OK);
//    }
}
