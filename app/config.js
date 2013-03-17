// Set the require.js configuration for your application.
require.config({

	// Initialize the application with the main application file and the JamJS
	// generated configuration file.
	deps: [
		"../vendor/jam/require.config",
		"main"
	],

	paths: {
		plugins: "../vendor/js/plugins",
		vendor: "../vendor",

		colResizable: "vendor/colResizable"
	},

	map: {

	},

	shim: {
		"app": {
			deps: [
				'../vendor/jam/underscore/underscore',
				'../vendor/jam/jquery/dist/jquery',
				'../vendor/jam/backbone/backbone'
			]
		}
	}
});
