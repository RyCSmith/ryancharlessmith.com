package com.ryancharlessmith.mail.client;

import com.ryancharlessmith.mail.data.MailRequest;

public interface MailClient {

	public String relay(MailRequest mailRequest);
}

