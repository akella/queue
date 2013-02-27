$(document).ready(function() {

	$('.entry__type input').click(function(){
		 if (this.checked){
			 $(this).parent().parent().parent('.entry').addClass('selected');
			 // showing link (.collapse_this)
			 $(this).parent().parent().parent('.entry')
			 .children('.entry__info').find('.collapse_this')
			 .show();
			 // showing link (.expand_this)
			  $(this).parent().parent().parent('.entry')
			  .children('.entry__info').find('.expand_this')
			  .show();
		 }
		else{
			$(this).parent().parent().parent('.entry').removeClass('selected');
			// hiding link (.collapse_this)
			$(this).parent().parent().parent('.entry')
			.children('.entry__info').find('.collapse_this')
			.hide();
			// hiding link (.expand_this)
			$(this).parent().parent().parent('.entry')
			.children('.entry__info').find('.expand_this')
			.hide();
		};


	});


		// //removing class .details__collapse_this and adding classes .expand + .expand_this
		// $('.details__collapse_this').click(function(){
		// 	$(this).removeClass()
		// 	.addClass('expand expand_this')
		// 	// adding text
		// 	.html('<i></i>Expand this entry');
		// });

		// //removing class .expand_this and adding classes .details__collapse + .details__collapse_this
		// $('.expand_this').click(function(){
		// 	$(this).removeClass();
		// 	$(this).addClass('details__collapse details__collapse_this')
		// 	// adding text
		// 	.html('<i></i>Collapse this entry');
		// });


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
		$('.details').animate({
		    "height": "show",
		    "marginTop": "show",
		    "marginBottom": "show",
		    "paddingTop": "show",
		    "paddingBottom": "show"
		},function(){
			$(this).addClass('animatedShow');
		});

	});
	$('.details__close,.movie__less').click(function(event) {
		$('.details').addClass('animatedHide').animate({
		    "height": "hide",
		    "marginTop": "hide",
		    "marginBottom": "hide",
		    "paddingTop": "hide",
		    "paddingBottom": "hide"
		});
		$('.movie__less').hide()
	});

});
