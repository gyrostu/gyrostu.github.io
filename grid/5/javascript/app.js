

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

	$( window ).setBreakpoints({
		distinct: true,
		breakpoints : [
			768
		]
	});

	$( window ).bind('exitBreakpoint768', function() {

			$( '.navbar li a.toggle' ).remove();
			$( '.navbar li:first' ).show().prepend( '<a href="#nav-toggle" class="nav-toggle">+</a>' );			 
			$( '.navbar li' ).has( 'ul' ).prepend( '<a href="#toggle" class="toggle">+</a>' );
			$( '.navbar li a.home' ).text($( 'li.active a' ).text());
			$( '.navbar li').hide();
			$( '.navbar li:first').show();
			$( '.navbar li ul').hide();

			$( '.navbar .nav-toggle' ).click( function() {
					$( '.navbar li' ).next().slideToggle();
			});

			$( '.navbar .toggle' ).click( function() {
				if ( $( this ).next().next().is( ':hidden' ) == true ) {

					$( '.navbar li ul' ).hide();
				}
				$( this ).next().next().slideToggle();
			});
	});



	$( window ).bind('enterBreakpoint768', function() {

			$( '.navbar li a.toggle' ).remove();
			// $( '.navbar li a.nav-toggle' ).remove();
			$( '.navbar li').show();
			$( '.navbar li ul').show();
			$( '.navbar li a.home' ).text("H");			 
			$( '.navbar li' ).has( 'ul' ).css('padding-right','30px').append( '<a href="#toggle" class="toggle">+</a>' );

	});



});

