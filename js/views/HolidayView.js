//Model view
define([
    'underscore',
    'jquery',
    'backbone',
    'models/Holiday',

], function(_, $, Backbone, Holiday) {
    var HolidayView = Backbone.View.extend({
        events: {
            'click li': 'toggleStrike'
        },
        initialize: function(options) {
            if (!(options && options.model)) throw new Error('model is not defined');
        },

        render: function() {
            this.$el.html('<h1>' + this.model.attributes.description + '</h1>');
            this.$el.append(this.model.attributes.date);
            if (this.model.attributes.image) {
                $('body').css('background-image', "url('images/"+this.model.attributes.image+"')");
            } else {
                $('body').css('background-image', 'url("images/cat.jpg")');
            }

            return this;
        }
    });
    return HolidayView;
});
