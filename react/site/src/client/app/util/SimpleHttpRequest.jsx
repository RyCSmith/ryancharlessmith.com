const https = require('https');

export const httpGet = (fullUrl, _callback, _errCallback, _callbackObj) => {
	https.get(fullUrl, (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk;
		});

		resp.on('end', () => {
			data = JSON.parse(data);
			
			if (resp.statusCode == 200) {
				_callback.apply(_callbackObj, [data]);
			}
			else {
				_errCallback.apply(_callbackObj, [data]);
			}
		});

	}).on("error", (err) => {
		_errCallback.apply(_callbackObj, [err]);
	});
}


export const httpPost = (fullUrl, postData) => {
	let data = JSON.stringify(postData);

	let options = {
		method: 'POST',
		path: fullUrl,
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length
		}
	};

	var postreq = https.request(options, function (res) {
	    console.log(res);
	});
	
	postreq.write(data);
	postreq.end();
}