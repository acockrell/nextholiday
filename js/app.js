define([
    'underscore',
    'backbone',
    'views/HolidaysView',
    'collections/Holidays'
], function (_, Backbone, HolidaysView, Holidays) {
    var initialize = function() {
        var holidays = new Holidays([{
            description: 'New Year\'s Day',
            date: 'January 2, 2017'
        }, {
            description: 'Family Day',
            date: 'February 13, 2017'
        }, {
            description: 'Good Friday',
            date: 'April 14, 2017'
        }, {
            description: 'Victoria Day',
            date: 'May 22, 2017'
        }, {
            description: 'Canada Day',
            date: 'July 3, 2017'
        }, {
            description: 'BC Day',
            date: 'August 7, 2017'
        }, {
            description: 'Labour Day',
            date: 'September 4, 2017'
        }, {
            description: 'Thanksgiving Day',
            date: 'October 9, 2017',
            image: 'thanksgiving.jpg'
        }, {
            description: 'Remembrance Day',
            date: 'November 13, 2017',
            image: 'veterans-day.jpg'
        }, {
            description: 'Christmas Day',
            date: 'December 25, 2015',
            image: 'xmas.jpg'
        }, {
            description: 'Boxing Day',
            date: 'December 26, 2015',
            image: 'xmas.jpg'
        }, {
            description: 'XMAS Closing',
            date: 'December 27, 2017',
            image: 'xmas.jpg'
        }, {
            description: 'XMAS Closing',
            date: 'December 28, 2017',
            image: 'xmas.jpg'
        }, {
            description: 'XMAS Closing',
            date: 'December 29, 2017',
            image: 'xmas.jpg'
        }, {
            description: 'XMAS Closing',
            date: 'December 30, 2017',
            image: 'xmas.jpg'
        }
    ]);

        new HolidaysView({
            el: '#holiday',
            collection: holidays,
        }).render();

    };

    return {
        initialize: initialize
    };

});
