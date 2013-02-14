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
		$(this).toggleClass('flipped');
	});
});
