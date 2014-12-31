$(document).ready( function () {
	
	//AJAX TEST
	$.ajax('portfolio-content.html', {
		success: function(response) {
			$('.portfolio-container').html(response);
		} 
	});

	// Scroll Functionality

	
	$(window).scroll( function () {

		// Header
		if ($(window).scrollTop() > 30) {
			$('.site-header').slideDown('fast');
		} else if ($(window).scrollTop() < 30) {
			$('.site-header').slideUp('fast');
		}

		// Portfolio Items
		if ($(window).scrollTop() > $(window).height() ) {
			var delay = 0,
				increment = 300;
			$('.portfolio-item').each(function() {
				$(this).delay(delay).fadeTo(800, 1);
				delay += increment;
			});
		}
	});

	

	// Nav-toggle
	$('.nav-toggle').on("click", function () {
	       $(this).toggleClass('toggle-open');
	       $('.nav-menu').fadeToggle();
	});
});