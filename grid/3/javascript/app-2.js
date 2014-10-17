

$(function() {

	/*

	$( '<select />' ).appendTo( '.nav' );

	$( '<option />', {
		'selected': 'selected',
		'value': '',
		'text': 'Go to...'
	}).appendTo( '.nav select');

	$( '.nav a').each( function() {
		var el = $( this );
		$( '<option />', {
			'value': el.attr('href'),
			'text': el.text()
		}).appendTo( '.nav select' ); 
	});

	$( '.nav select' ).change( function(){
		window.location = $( this ).find( 'option:selected' ).val();
	});

	*/

	// TODO Clear styles and behavior when rezize. 


	function navHandler() {

		if ($('.nav').hasClass('mobile-nav')) {
			$( '.mobile-nav .navbar li:first' ).show().prepend( '<a href="#nav-toggle" class="nav-toggle">+</a>' );			 
			$( '.mobile-nav .navbar li' ).has( 'ul' ).prepend( '<a href="#toggle" class="toggle">+</a>' );
			$( '.mobile-nav .navbar li a.home' ).text($( 'li.active a' ).text());
			$( '.mobile-nav .navbar li').hide();
			$( '.mobile-nav .navbar li:first').show();
			$( '.mobile-nav .navbar li ul').hide();

			$( '.mobile-nav .navbar .nav-toggle' ).click( function() {
				$( '.mobile-nav .navbar li' ).next().slideToggle();
			});

			$( '.mobile-nav .navbar .toggle' ).click( function() {
				if ( $( this ).next().next().is( ':hidden' ) == true ) {

					$( '.mobile-nav .navbar li ul' ).hide();
				}
				$( this ).next().next().slideToggle();
			});
		}

		 else if ($('.nav').hasClass('desktop-nav')) {

			$( '.desktop-nav .navbar li a.toggle' ).remove();
			// $( '.navbar li a.nav-toggle' ).remove();
			$( '.desktop-nav .navbar li').show();
			$( '.desktop-nav .navbar li ul').show();
			$( '.desktop-nav .navbar li a.home' ).text("H");			 
			$( '.desktop-nav .navbar li' ).has( 'ul' ).css('padding-right','30px').append( '<a href="#toggle" class="toggle">+</a>' );
		}
	
	}



	function checkWidth() {

		if ( $( window ).width() > 768 ) {
		 	$('.nav').removeClass('mobile-nav');
		 	$('.nav').addClass('desktop-nav');
		 	navHandler();
			
		 	// location.reload();
		
		}  else if ( $( window ).width() <= 768 ) {
			$('.nav').removeClass('desktop-nav');
		 	$('.nav').addClass('mobile-nav');
			navHandler();

			// location.reload();

		}
	}



	var resizeTimer;
	
	$(window).bind('load resize', function() {

		checkWidth();

		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkWidth, 1000);
	
	});
});

