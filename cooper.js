$(document).ready(function() {
	
	setTimeout(function(){
		$("body").addClass('loaded');
	}, 800);
	
});

$(document).on("scroll", function() {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $(".tag");
  
	for (var i = 0; i < tags.length; i++) {
	  var tag = tags[i];
  
	  if ($(tag).position().top < pageBottom) {
		$(tag).addClass("visible");
	  } else {
		$(tag).removeClass("visible");
	  }
	}
  });
  
  $(document).on("scroll", function() {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $(".tag");
  
	for (var i = 0; i < tags.length; i++) {
	  var tag = tags[i];
  
	  if ($(tag).position().top < pageBottom) {
		$(tag).addClass("visible");
	  } else {
		$(tag).removeClass("visible");
	  }
	}
  });
  

