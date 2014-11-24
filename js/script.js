$(document).ready( function () {

	// Nav-toggle
	$('.nav-toggle').on("click", function () {
	       $(this).toggleClass('toggle-open');
	       $('.nav-menu').toggleClass('menu-open');
	});
});