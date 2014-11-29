function javaScript() {
	$(document).ready(function() {

		function mobileToggle() {
			$(".main-header-mobile-button").click(function(){
	    		$(".main-header-mobile").toggle();
	  		});
		};

		function mobileColor() {
			$(".main-header-mobile-button").click(function(){
				$(this).toggleClass("mobile-bg-coal");
			});
		};

		function mobileColor() {
			$(".main-header-mobile-button").click(function(){
				$(this).toggleClass("mobile-bg-coal");
			});
		};

		function signinOverlay() {
			$(".signin-overlay").click(function(){
				$(".overlay").addClass("is-active");
			});
			
			$(".overlay-button").click(function(){
				$(".overlay").removeClass("is-active");
			})
		};

		function smoothScroll() {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
			});
		};

		function imgSlider() {
			$(".carousel-next").on("click", function(e) {
				var currentActiveImage = $(".image-active");
				var nextActiveImage = currentActiveImage.next();

				if(nextActiveImage.length == 0) {
					nextActiveImage = $(".carousel-inner img").first();
				};

				currentActiveImage.removeClass("image-active").addClass("image-hidden");
				nextActiveImage.addClass("image-active").removeClass("image-hidden");
				$(".carousel-inner img").not([currentActiveImage, nextActiveImage]);

				e.preventDefault();
			});

			$(".carousel-previous").on("click", function(e) {
				var currentActiveImage = $(".image-active");
				var nextActiveImage = currentActiveImage.prev();

				if(nextActiveImage.length == 0) {
					nextActiveImage = $(".carousel-inner img").last();
				}

				currentActiveImage.removeClass("image-active").addClass("image-hidden");
				nextActiveImage.addClass("image-active").removeClass("image-hidden");
				$(".carousel-inner img").not([currentActiveImage, nextActiveImage]);

				e.preventDefault();
			});
		};


		function sectionToggle() {
			$(".features-icon").click(function() {
				var tabId = $("features-toggle").attr("data-tab");

				$(".features-icon").removeClass("is-active");
				$(".features-toggle").removeClass("is-active");

				$(this).addClass("is-active");
				$("#" + tabId).addClass("is-active");
			});
		};


		mobileToggle();
		mobileColor();
		signinOverlay();
		smoothScroll();
		imgSlider();
		sectionToggle();

	});
};


javaScript();








