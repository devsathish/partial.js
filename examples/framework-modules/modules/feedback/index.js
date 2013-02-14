var helper = require('./helper');
var greeting = '';

exports.install = function (framework) {
	framework.route('/feedback/', feedback, ['xhr', 'post']);

	// create client side JavaScript
	// framework.createJS('p', 'func' + 'tion feedback() { alert("I am feedback"); }');

	// create client side CSS
	// framework.createCSS('p', 'feedback { padding:5px; font: normal 20px Arial; }');

	// create view file (must exists Views directory)
	// framework.createView('feedback', '@{routeJS("p.js")}');

	// create template file (must exists Templates directory)
	// framework.createTemplate('feedback', '<div>{name}</div>');

	// create content file (must exists Contents directory)
	// framework.createContent('feedback', '<div>static content from Feedback module</div>');

	// create resource (must exists Resources directory)
	// framework.createResource('feedback', 'hello	: welcome in feedback resource');
	// framework.resource('feedback', 'hello');

	// get directory path
	// framework.path(framework.config.directoryPublic, 'module-public-directory');
	// .. or get file path ..
	// framework.path(framework.config.directoryPublic, 'module-public-directory', 'image.jpg');
};

exports.onRequest = function() {
	// this method is called every request to route
};

exports.greeting = function(value) {
	greeting = value;
};

function feedback() {
	this.json({ message: helper.toUpper(greeting) });
}