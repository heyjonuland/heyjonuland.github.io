$(document).ready( function () {
	
	// Scroll Functionality
	$(window).scroll( function () {
		if ($(window).scrollTop() < 30) {
			$('.site-header').slideUp("fast");
		} else if ($(window).scrollTop() > 30) {
			$('.site-header').slideDown("fast");
		}

		if ($(window).scrollTop() > 100) {
			var delay = 0,
				increment = 300;
			$('.portfolio-item').each(function() {
				$(this).delay(delay).fadeTo('slow', 1);
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