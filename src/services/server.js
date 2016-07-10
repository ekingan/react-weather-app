var APIKEY = '&APPID=389fe5cd1ef36b657382a7ef465553f2',
		API = 'http://api.openweathermap.org',
		Fetch = require('whatwg-fetch');

var service = {
	get: function(url) {
		return fetch(API + url)
		.then(function(res) {
			return res.json();

		});
	}
};

module.exports = service;