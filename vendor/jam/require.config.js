var jam = {
	"packages": [
		{
			"name": "backbone",
			"location": "../vendor/jam/backbone",
			"main": "backbone.js"
		},
		{
			"name": "jquery",
			"location": "../vendor/jam/jquery",
			"main": "dist/jquery.js"
		},
		{
			"name": "underscore",
			"location": "../vendor/jam/underscore",
			"main": "underscore.js"
		}
	],

	"version": "0.2.11",

	"shim": {
		"underscore": {
			"exports": "_"
		}
	}
};

if (typeof require !== "undefined" && require.config) {
	require.config({packages: jam.packages, shim: jam.shim});
}
else {
	var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
	module.exports = jam;
}