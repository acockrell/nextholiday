//Model
define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var Holiday = Backbone.Model.extend({
		validate: function(attrs) {
			if (!attrs.description) return 'Description is required';
		}
	});
	return Holiday;
});
