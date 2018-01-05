require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		countdown: 'lib/jquery-countdown-min'
	}
});

define(['app'], function(App) {
	App.initialize();
});
