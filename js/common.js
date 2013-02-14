$(document).ready(function() {

	$('.entry__type input:checked').parent().parent().parent('.entry').addClass('selected');
	$('.entry__type input').click(function(){
		 if (this.checked){
			 $(this).parent().parent().parent('.entry').addClass('selected');
		 }
		else{
			$(this).parent().parent().parent('.entry').removeClass('selected');
		};
	});

	$('.movie__pic').click(function(event) {
		$('.movie_current').removeClass('movie_current');
		$(this).toggleClass('flipped');
		$('body').toggleClass('movie_fade');
		$(this).parent().addClass('movie_current');
	});


});
