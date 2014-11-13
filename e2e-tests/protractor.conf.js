exports.config = {

	allScriptsTimeout: 11000,

	specs: [
		'specs/*.js'
	],

	capabilities: {
		browserName: 'chrome'
	},

	baseUrl: 'http://localhost:8000',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}

};