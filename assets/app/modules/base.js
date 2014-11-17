// base functions
app.base = (function($, _ , app, grunticon) {

	var def = function() {
		app.options = {};

		// setup touch for mobile
		app.options.uAgent = navigator.userAgent;
    app.options.interaction = app.options.uAgent.match(/(iPad|iPhone|iPod)/g) ? "touchstart" : "click";

		init.call(this);
	};

	var init = function(){
		this.gruntIcon();
		this.mobileToggle();
		// this.imgCarousel();
		// this.module();
	};

	def.prototype = {
		// grunticon
		gruntIcon: function() {
			grunticon(["../assets/svg/icons.data.svg.css", "../assets/svg/icons.data.png.css", "../assets/svg/icons.fallback.css"]);
			
			// ie8 hack for icons
				setTimeout(function(){
					$('.icon').hide();
					$('.icon').show();
				}, 1200);

		},

		mobileToggle: function() {
			$(document).ready(function() {
			  $(".main-header-mobile-button").click(function(){ 
			    $(".main-header-mobile").toggle();
			  });
			});
		}

		// imgCarousel: function() {
		// 	$('#slides').superslides({
		// 		hashchange: true;
		// 	});
		// }

	};

	return def;
}).call(this, jQuery, _, app, grunticon);