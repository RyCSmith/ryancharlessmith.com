package com.ryancharlessmith;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;

/*
 * 
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.7</version>
</dependency>
 */
public class MailinEdited
{
	//sendTESTblue
	private static final String EMPTY_STRING = "";
    private String base_url = "https://api.sendinblue.com/v2.0";
    private String api_key = "VRNFCIk6B9G1sJaY";
    private int timeout = 30000;

    public String relay(String name, String email, String message) {
		Map < String, String > to = new HashMap < String, String > ();
			to.put("rycsmith@gmail.com", "Ryan Smith");

		Map < String, Object > data = new HashMap < String, Object > ();
			data.put("to", to);
			data.put("from", new String [] {"ry@ryancharlessmith.com","from email!"});
			data.put("subject", "New Contact @ ryancharlessmith.com");
			data.put("html", "<p>From: " + name + "</p><br><p>Email: " + email + "</p><br><p>Message: " + message + "</p>");
		String str = send_email(data);
		System.out.println(str);
		return str;
    }
    
	public String send_email(Object data) {
        Gson gson = new Gson();
        String json = gson.toJson(data);
        return post("email", json);
    }
	
	 public String post(String resource, String input) {
	        try {
	            return do_request(resource, "POST", input);
	        } catch (Exception ignored) {

	        }
	        return null;
	    }
	 
	 private String do_request(String resource, String method, String input) throws Exception {
	        String url = base_url + "/" + resource;
	        String key = api_key;
	        Integer req_timeout = timeout;
	        String content_header = "application/json";

	        URL obj = new URL(url);
	        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

	        try{
	            if (req_timeout != null && (req_timeout <= 0 || req_timeout > 60000)) {
	                throw new Exception("value not allowed for timeout");
	            }       
	        } catch (Exception e){
	            e.printStackTrace();
	            return "";
	        }

	        con.setRequestProperty("api-key", key);
	        con.setRequestProperty("Content-Type", content_header);
	        con.setReadTimeout(req_timeout);
	        con.setDoOutput(true);
	        con.setDoInput(true);
	        con.setRequestMethod(method);
	        con.setUseCaches(false);

	        if (!EMPTY_STRING.equals(input) && !"GET".equals(method)) {

	            BufferedWriter writer = null;
	            DataOutputStream outStream = null;

	            try {
	                outStream = new DataOutputStream(con.getOutputStream());
	                writer = new BufferedWriter(new OutputStreamWriter(outStream, "UTF-8"));
	                writer.write(input);
	                writer.flush();
	            }
	            //
	            catch (IOException e) {
	                e.printStackTrace();
	            }
	            //
	            finally {
	                try {
	                    if (writer != null) {
	                        writer.flush();
	                        writer.close();
	                    }
	                    if (outStream != null) {
	                        outStream.close();
	                    }

	                } catch (IOException e) {
	                    e.printStackTrace();
	                }
	            }
	        }

	        int responseCode = con.getResponseCode();
	        String inputLine;
	        StringBuilder response = new StringBuilder();
	        BufferedReader in = null;

	        try {
	            if (200 <= responseCode && responseCode < 300) {
	                in = new BufferedReader(new InputStreamReader(con.getInputStream()));
	            }
	            else {
	                in = new BufferedReader(new InputStreamReader(con.getErrorStream()));
	            }

	            while ((inputLine = in.readLine()) != null) {
	                response.append(inputLine);
	            }
	        }
	        //
	        catch (IOException e) {
	            e.printStackTrace();
	        }
	        //
	        finally {
	            if (in != null) {
	                try {
	                    in.close();
	                } catch (IOException e) {
	                    e.printStackTrace();
	                }
	            }
	        }

	        return response.toString();
	    }
}
