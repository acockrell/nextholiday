//Collection view
define([
    'underscore',
    'jquery',
    'countdown',
    'backbone',
    'views/HolidayView',

], function (_, $, countdown, Backbone, HolidayView) {
    var HolidaysView = Backbone.View.extend({

        initialize: function (options) {
            if (!(options && options.collection)) throw new Error('collection is not specified');
            this.listenTo(this.collection, 'add remove', this.render);
        },

        render: function () {
            var self = this,
                today = new Date();
            self.$el.html('');
            var upcomingHoliday = this.collection.next(today);
            upcomingHoliday.each(function (holiday) {
                self.$el.append(new HolidayView({
                    model: holiday
                }).render().el);
                var date = new Date(holiday.attributes.date);
                $('#countdown').countdown(date, function(event) {
                    $(this).html(event.strftime('%D days %H hours left'));
                });
            }, this);
            var backgroundColor = Math.floor(Math.random()*16777215).toString(16);
            $('body').css('background-color', '#'+backgroundColor);

        }
    });
    return HolidaysView;
});