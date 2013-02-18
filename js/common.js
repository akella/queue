$(document).ready(function() {

	//$('.entry__type input:checked').parent().parent().parent('.entry').addClass('selected');
	$('.entry__type input').click(function(){
		 if (this.checked){
			 $(this).parent().parent().parent('.entry').addClass('selected');
			 $('.details__collapse_this').show();
		 }
		else{
			$(this).parent().parent().parent('.entry').removeClass('selected');
			$('.details__collapse_this').hide();
		};
	});

	$('.movie__pic').click(function(event) {
		if($(this).parent().hasClass('movie_current')){
			$(this).parent().removeClass('movie_current');
			$('body').removeClass('movie_fade');
			$(this).toggleClass('flipped');
		}
		else{
			$('.movie_current').children('.flipped').removeClass('flipped');
			$('.movie_current').removeClass('movie_current');

			$(this).toggleClass('flipped');
			$('body').addClass('movie_fade');
			$(this).parent().addClass('movie_current');
		}
		

	});

	$('.movie__more').click(function(event) {
		$(this).hide();
		$(this).next().show();
		// getting place of details
		number = $(this).parents('.movie').index() + 1;
		row = parseInt($(window).width()/287);
		numberinrow = number%row;
		if(numberinrow==0){numberinrow=4;}
		rownumber = parseInt(number/row);
		if(rownumber==0){rownumber=1;}

		//alert(number+'number of block---'+row+'inarow---'+numberinrow+'ninaro=='+rownumber+'FINALL'+row*rownumber);
		// getting place of arr for details
		$('.details__arr').css('left', 287*numberinrow - 120);
		//moving details where it should
		$det = $('.details');
		paren = $('.movie:nth-child('+row*rownumber+')');
		$det.insertAfter(paren);
		$('.details').slideToggle('slow');

	});
	$('.details__close,.movie__less').click(function(event) {
		$('.details').slideToggle();
		$('.movie__less').hide()
	});

});
