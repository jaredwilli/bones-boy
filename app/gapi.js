define([
	'apiConfig'
],

function(config) {
	function ApiManager() {
		this.loadGapi();
	}

	_.extend(ApiManager.prototype, Backbone.Events);

	ApiManager.prototype.loadGapi = function() {
		var self = this;

		gapi.client.load('tasks', 'v1', function() { /* loaded */ });

		function handleClientLoad() {
			gapi.client.setApiKey(config.apiKey);
			window.setTimeout(checkAuth, 100);
		}

		function checkAuth() {
			gapi.auth.authorize({ client_id: config.clientId, scope: config.scopes, immediate: true }, handleAuthResult);
		}

		function handleAuthResult(authResult) {

		}

		handleClientLoad();
	};

	ApiManager.prototype.loadGapi = function() {
		var self = this;

		// Don't load if already present
		if (typeof gapi !== 'undefined') {
			return this.init();
		}

		require([
			'https://apis.google.com/js/client.js?onload=define'
		],

		function() {
			function checkGapi() {
				if (gapi && gapi.client) {
					self.init();
				} else {
					setTimeout(checkGapi, 100);
				}
			}

			checkGapi();
		});
	};

	Backbone.sync = function(method, model, options) {
		//options || (options = {});

		switch (method) {
			case 'create':
			break;
			case 'update':
			break;
			case 'delete':
			break;
			case 'read':
			break;
		}
	};

	return ApiManager;
});