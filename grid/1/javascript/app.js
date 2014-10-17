/*
 * Development
 */

$(function()

{

	// DEV Only

	$('body').prepend('<p id="screenSize" style="text-align:center;background:#ffc;padding:5px;font-style:italic;color:#666;">Screen Size</p>');

	// Responsive Menu

	var menuLinks = $(".menu li:not(.active, .toggle)");

	$(".toggle").bind('click focus', function()
	{
		$(menuLinks).toggle();
		$(".toggle").toggleClass('expanded');
	});

	// Responsive Screen, Nav behaviors

	$(window).resize(function()
	{

		if ($(this).width() >= 768) {

			$('#screenSize').text('Greater than 767px');

			$('ul.menu li li').parent()
							  .parent()
							  .addClass('dropdown')
							  .append('<span style="position:absolute;right:0;top:0;color:white;"><a class="subtrigger" href="#dang" style="border-left:none;">&nbsp;</a></span>'
							  );
		

			
			$('.menu .subtrigger').bind('click', function()
			{
				
				if ( $('.menu li > ul').css('visibility') == 'hidden')
				
				{
				
					$('.menu li > ul').css('visibility', 'visible');
				
				}  
				
			});
			
			$('.menu .dropdown').mouseleave( function () {
				
				$('.menu li > ul').css('visibility', 'hidden');
				
			});
			
			$('.menu .dropdown').mouseenter( function () {
				
				$('.menu li > ul').css('visibility', 'visible');
				
			});
			
			
			/*
			
			Outtakes
			
			
			$('.menu .subtrigger').bind('click focus', function()
			{

				if ($('.menu li > ul').css('visibility') == 'hidden') {
					
					$('.menu li > ul').css('visibility', 'visible');
					
				} else {
					
					$('.menu li > ul').css('visibility', 'hidden');
				
				}
			});
			
			
			$('.menu .dropdown').bind('blur focusout', function()
			{
				if ($('.menu li > ul').css('visibility') == 'visible') {
					
					$('.menu li > ul').css('visibility', 'hidden');
					
				}
				
			});
			
			
			
			
			var st = true;
			$('.menu li > ul').css( "visibility" , ( st ? "visible" : "hidden" ));  
			
			$('.menu .dropdown .subtrigger').bind('click focus', function()
			{

				if ($('.menu li > ul').css('visibility') == 'hidden') {
					
					$('.menu li > ul').css('visibility', 'visible');
					
				} else {
					
					$('.menu li > ul').css('visibility', 'hidden');
				
				}
			});
				
				*/
				
			

			// $('ul.menu li li').parent().parent().addClass('dropdown');

			if ($(menuLinks).is(':hidden')) {
				$(menuLinks).show();
				$(".toggle").removeClass('expanded');
			}

		}
		if ($(this).width() >= 321 && $(this).width() <= 767) {

			$('#screenSize').text('321px to 767px');
			$('ul.menu li li').parent().parent().removeClass('dropdown');

			if ($(menuLinks).is(':visible')) {
				$(menuLinks).hide();
				$(".toggle").removeClass('expanded');
			}

		}
		if ($(this).width() <= 320) {

			$('#screenSize').text('Less than 321px');

		}

	}).resize();
	// Trigger resize on page load

});
