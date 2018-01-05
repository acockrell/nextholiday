//Collection
define([
	'underscore',
	'backbone',
	'models/Holiday'
], function(_, Backbone, Holiday) {
	var Holidays = Backbone.Collection.extend({
		model: Holiday,

        initialize: function(options) {
            this.url = options.url;
        },

		next: function(today) {
			filtered = this.filter(function(holiday) {
				var date;
				if (holiday.attributes.year) {
					date = new Date(holiday.attributes.year, holiday.attributes.month - 1, holiday.attributes.day);
				} else {
					date = new Date(holiday.attributes.date);
				}
				if (date > today) {
					return holiday;
				}
			});
			return new Holidays(filtered[0]);
		}
	});
	return Holidays;
});
