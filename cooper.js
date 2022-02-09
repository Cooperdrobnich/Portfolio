$(document).ready(function() {
	
	setTimeout(function(){
		$("body").addClass('loaded');
	}, 800);
	
});


$(document).ready(function() {
	
	setTimeout(function(){
		$(".fade-in").addClass('appear');
	}, 1700);
	
});

$(document).scroll(function(appearOptions) {
	
	setTimeout(function(){
		$(".slide-in").addClass('appear');
	}, 400);
	
});

const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -250px 0px"
  };