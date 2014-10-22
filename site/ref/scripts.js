$(function() {
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
		event.preventDefault();
	});

	$('#demoCode').modal(backdrop, keyboard);

});