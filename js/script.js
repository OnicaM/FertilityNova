
$(document).ready(function(){
	const $navbar = $('.navbar');

	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();

	    const scrollTop = $($(this).attr('href')).position().top - $navbar.outerHeight();

	    $('html, body').animate({ scrollTop });
	});
});