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
