package com.ryancharlessmith.mail.client;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SimpleMailClient {

	static Properties mailServerProperties;
	static Session getMailSession;
	static MimeMessage generateMailMessage;
 
	public static void generateAndSendEmail(String name, String email, String message) throws AddressException, MessagingException {
 
		// Step1 - set up mail server properties
		mailServerProperties = System.getProperties();
		mailServerProperties.put("mail.smtp.port", "587");
		mailServerProperties.put("mail.smtp.auth", "true");
		mailServerProperties.put("mail.smtp.starttls.enable", "true");
 
		// Step2 - get mail session
		getMailSession = Session.getDefaultInstance(mailServerProperties, null);
		generateMailMessage = new MimeMessage(getMailSession);
		generateMailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("rycsmith@gmail.com"));
		generateMailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("ryan.mail.forwarding@gmail.com"));
		generateMailMessage.setSubject("Email from ryancharlessmith.com");
		String emailBody = "Name: " + name + "<br><br>Email: " + email + "<br><br>Message: " + message;
		generateMailMessage.setContent(emailBody, "text/html");
 
		// Step3 - get mail session and send mail
		Transport transport = getMailSession.getTransport("smtp");
		transport.connect("smtp.gmail.com", "ryan.mail.forwarding", "ry30Mail");
		transport.sendMessage(generateMailMessage, generateMailMessage.getAllRecipients());
		transport.close();
	}

}

