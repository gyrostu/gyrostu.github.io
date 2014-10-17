/*
 * Development
 */

$(function() {

	/* Responsive Menu */

	 // Level 1

	 function accordion() {

	 $( '.navbar.accordion li:not(.active)' ).hide();
	 $( '.navbar.accordion .active' ).append( '<a href="#toggle" class="nav-toggle">+</a>' );

	 $( '.navbar.accordion .nav-toggle' ).click( function() {
	 	
	 	$( '.navbar.accordion li:not(.active)' ).toggle();

	 });

	 // Level 2

	 $( '.navbar.accordion .toggle' ).click( function() {
	 	
	 	$( this ).next().toggle();

	 });

	 $( '.navbar.accordion .toggle' ).next().hide();

	}


	$( window ).resize( function() {

		// 768px or greater

		/*

		NAVIGATION DROPDOWN

		ul.menubar
			li.menuitem
			li.menuitem
				ul.menu
					li.menuitem
		
		ul.navbar
			li.navitem
			li.navitem
				ul.nav
					li.navitem
		
		*/
		
		if( $( this ).width() >= 768 ) {

			$( '.navbar' ).removeClass( 'accordion' );

			/*

				$( 'ul.navbar' ).removeClass( 'accordion' ).css( 'border','dotted 2px red' );

				// $('ul.navbar li').has('ul').addClass('has-descendant').append('<a class="descendant-control" href="#">&nbsp;</a>');

				 $( 'ul.navbar li li' ).parent().parent().addClass( 'dropdown' ).append( '<span style="position:absolute;right:0;top:0;color:white;"><a class="descendant-control" href="#" style="border-left:none;">&nbsp;</a></span>' );

				 $( '.navbar .descendant-control' ).bind( 'click', function() {
				 
				 if( $( '.navbar li > ul' ).css( 'display' ) == 'none' ) {

				 $( '.navbar li > ul' ).css( 'display', 'block' );
			 }
			 
			 });

			 $( '.navbar .dropdown' ).mouseleave( function() {

			 	$( '.navbar li > ul' ).css( 'visibility', 'hidden' );
			 
			 });

			 $( '.navbar .dropdown' ).mouseenter( function() {
			 	
			 	$( '.navbar li > ul' ).css( 'visibility', 'visible' );
			 
			 });

			 

			 if ( $(menuLinks).is(':hidden') ) {
			 	$(menuLinks).show();
			 	$(".descendant-control").removeClass('expanded');
			 }

			 

			 // $('.menu ul').css('visibility','hidden');

			 */

		}

		// Up to 767px

		if ($(this).width() <= 767) {

			$( '.navbar' ).addClass( 'accordion' );

			accordion();

			// $('ul.mainMenu li > ul li').parent().parent().removeClass('dropdown');

			/*
			 if ( $(menuLinks).is(':visible') ) {
			 	$(menuLinks).hide();
			 	$(".toggle").removeClass('expanded');
			 }

			 $( '.mainMenu ul' ).css( 'visibility','visible' );

			 $( menuLinks ).css( 'display','block' );

			 $('ul.mainMenu li > ul li').parent().parent()
			 .prepend('<span style="position:absolute;right:0;top:0;color:white;"><a class="subtrigger" href="#subNav" style="border-left:none;">+</a></span>');

			 */

		}

	}).resize();
	// Trigger resize on page load

});
