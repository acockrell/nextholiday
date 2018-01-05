define([
	'underscore',
	'backbone',
	'router',
	'views/HolidaysView',
	'collections/Holidays'
], function(_, Backbone, Router, HolidaysView, Holidays) {
	var initialize = function() {
		Router.initialize();
	};

	return {
		initialize: initialize
	};

});
