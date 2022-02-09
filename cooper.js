$(document).ready(function() {
	
	setTimeout(function(){
		$("body").addClass('loaded');
	}, 800);
	
});


$(document).ready(function() {
	
	setTimeout(function(){
		$(".fade-in").addClass('appear');
	}, 1900);
	
});

$(document).scroll(function() {
	
	setTimeout(function(){
		$(".slide-in").addClass('appear');
	}, 400);
	
});