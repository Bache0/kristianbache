$(document).ready(function(){

   $(window).bind('scroll', function() {
   var navHeight = $( "#header" ).height() + 100;
         if ($(window).scrollTop() > navHeight) {
             $('#navbar').addClass('fixed');
         }
         else {
             $('#navbar').removeClass('fixed');
         }
    });
    
    // hide #tilbake-top first
	$("#tilbake-top").hide();
	
	// fade in #tilbake-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#tilbake-top').fadeIn();
			} else {
				$('#tilbake-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#tilbake-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	// Hover effect for the Tilbake button
	$('.back-button').hover( function () {
		$('.back-button').stop().animate({'opacity': '1'}, 1000);
	}, 
	function () {
		$('.back-button').stop().animate({'opacity': '0.4'}, 1000);
	});
});

$(function () {

	var hasClickRunned = false;
	//var state = "";
	
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				effects: ['fade'],
				easing: 'snap',
				//filter: 'state',
				// call the hover effect
				onMixEnd: filterList.hoverEffect(),
				onMixEnd: filterList.clickEffect()
			});				
		
		},
		

		hoverEffect: function () {
				
			// Simple parallax effect
				$('#portfoliolist .mix, .label, .circle_wrap').hover( function () {
					if (hasClickRunned === false) {
						$(this).find('.label').stop().animate({'opacity': '0.5'});
						$(this).find('.circle_wrap').stop().animate({'opacity': '1'});
					} else {
						$('.label, .circle_wrap').stop().css('opacity', '0');
						$('.portfolio-wrapper').css('cursor', 'initial');
					}
				}, 
				function () {
					if (hasClickRunned === false) {
						$(this).find('.label').stop().animate({'opacity': '0'});
						$(this).find('.circle_wrap').stop().animate({'opacity': '0'});
					} else {
						$('.label, .circle_wrap').stop().css('opacity', '0');
						$('.portfolio-wrapper').css('cursor', 'initial');
					}
				});			
		},

		// Portfolio click enlarge effect
		clickEffect: function () {
			$('#portfoliolist .mix, .label, .circle').finish().click( function () {
				hasClickRunned = true;
				//state = $('#portfoliolist').mixItUp('getState');
				$('#portfoliolist').mixItUp('destroy');
				$(this).closest('.mix').siblings().hide('slow');
				$('.filter').hide('fast');
				//$('#filters').animate({'height': '0', 'margin': '0'}, 500);//.animate({borderTopWidth: '5px'});
				$('.portfolio-wrapper').css('cursor', 'initial');
				$('.label, .circle_wrap').stop().css('opacity', '0');
				$('#portfoliolist .mix').animate({'width': '50%'}, 1000);
				$(this).closest('.mix').next('.text_box').delay(1300).fadeIn('fast');
			});

			$('.back-button').finish().click( function () {
				$(this).closest('.text_box').hide();
				$('#portfoliolist .mix').animate({'width': '23%'}, 1000);
				$('.portfolio-wrapper').css('cursor', 'pointer');
				$('.filter').show('slow');
				//$('#filters').animate({'height': '30px', 'margin': '1%'}, 0);//.animate({borderTopWidth: '5px'});
				$(this).closest('.mix').siblings().show('slow');
				setTimeout(filterList.init, 1000)
				//$('#portfoliolist').mixItUp('filter', state.activeFilter);
				hasClickRunned = false;
			})
		}

	};
	
	// Run
	filterList.init();
	
});


