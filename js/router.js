//router.js
define([
  'underscore',
  'backbone',
  'views/HolidaysView',
  'collections/Holidays'
], function(_, Backbone, HolidaysView, Holidays) {

  var initialize = function() {
    var appRouter = new AppRouter();
    Backbone.history.start();
  };

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'default',
      'custom/:year/:month/:day': 'custom',
      'ea_holidays': 'ea_holidays',
      'us_holidays': 'us_holidays',
      'springbreak': 'springbreak',
      'mitchell': 'mitchell',
      'test': 'test',
      '*notfound': 'notFound'
    },

    addToView: function(collection) {
      collection.fetch({
        success: function() {
          new HolidaysView({
            collection: collection
          }).render();
        }
      });
    },

    default: function() {
      var date = new Holidays({
        url: 'js/json/mitchell.json'
      });
      this.addToView(date);
      var date = new Holidays({
        url: 'js/json/ea_holidays.json'
      });
      this.addToView(date);

    },

    ea_holidays: function() {
      var date = new Holidays({
        url: 'js/json/ea_holidays.json'
      });
      this.addToView(date);
    },

    us_holidays: function() {
      var date = new Holidays({
        url: 'js/json/us_holidays.json'
      });
      this.addToView(date);
    },

    springbreak: function() {
      var date = new Holidays({
        url: 'js/json/springbreak.json'
      });
      this.addToView(date);
    },

    mitchell: function() {
      var date = new Holidays({
        url: 'js/json/mitchell.json'
      });
      this.addToView(date);
    },

    test: function() {
      var date = new Holidays({
        url: 'js/json/test.json'
      });
      this.addToView(date);
    },

    custom: function(year, month, day) {
      var date = new Holidays([{
        description: 'Custom',
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day)
      }]);
      new HolidaysView({
        collection: date
      }).render();
    },

    notFound: function() {
      $('#holiday').html('<h1>404 - Page not found</h1>');
      $('#countdown').countdown('stop').html('');
      $('body').css('background-image', 'url("images/404.jpg")');
    }

  });

  return {
    initialize: initialize
  };

});
