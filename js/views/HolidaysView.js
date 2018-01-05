//Collection view
define([
	'underscore',
	'jquery',
	'countdown',
	'backbone',
	'views/HolidayView',

], function(_, $, countdown, Backbone, HolidayView) {
	var HolidaysView = Backbone.View.extend({
        el: '#holiday',

		initialize: function(options) {
			if (!(options && options.collection)) throw new Error('collection is not specified');
			this.listenTo(this.collection, 'add remove', this.render);
		},

		render: function() {
			var self = this,
				today = new Date(),
				upcomingHoliday = this.collection.next(today);
			self.$el.html('');
			upcomingHoliday.each(function(holiday) {
				self.$el.append(new HolidayView({
					model: holiday
				}).render().el);
				var date;
				if (holiday.attributes.date) {
					date = new Date(holiday.attributes.date);
				} else {
					date = new Date(holiday.attributes.year, holiday.attributes.month - 1, holiday.attributes.day);
				}
				$('#countdown').countdown(date, function(event) {
					$(this).html(event.strftime('%D day%!D %H hour%!H left'));
				});
			}, this);
		}
	});
	return HolidaysView;
});
