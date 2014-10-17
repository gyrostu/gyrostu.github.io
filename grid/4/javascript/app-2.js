

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

			// Mobile

			// $( '.navbar li:first' ).show().prepend( '<a href="#nav-toggle" class="nav-toggle">+</a>' );			 
			
			
		function enhanceNav() {

			
			// Check window size and add class

			// if ( $( window ).width() > 768 ) {

			// 	$( '.nav' ).addClass( 'desktop-nav' );
		
			// }  

			// else if ( $( window ).width() <= 768 ) {

			// 	$( '.nav' ).addClass( 'mobile-nav' );

			// }
			
			// Enhancements

			$( '.navbar li' ).has( 'ul' ).addClass('dropdown').prepend( '<a href="#toggle" class="toggle">+</a>' ); // Adds Dropdown Controller

			// $( '.navbar li a.home' ).text($( 'li.active a' ).text());
			
			// $( '.navbar li').hide();
			// $( '.navbar li:first').show();
			// $( '.navbar li ul').hide();

			// $( '.navbar .nav-toggle' ).click( function() {
			//	 $( '.navbar li' ).next().slideToggle();
			// });

			// $( '.navbar .toggle' ).click( function() {
			// 	if ( $( this ).next().next().is( ':hidden' ) == true ) {
			// 
			// 		$( '.navbar li ul' ).hide();
			// 	}
			// 	$( this ).next().next().slideToggle();
			// });

			// Desktop

			// $( '.navbar li a.toggle' ).remove();

			
			// $( '.navbar li').show();
			// $( '.navbar li ul').show();
			
			// $( '.navbar li a.home' ).text("H");			 
			// $( '.navbar li' ).has( 'ul' ).css('padding-right','30px').append( '<a href="#toggle" class="toggle">+</a>' );

		}

		 enhanceNav();

/*

	var resizeTimer;
	
	$(window).bind('load resize', function() {

		enhanceNav();

		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(enhanceNav, 1000);
	
	});

*/	
});

