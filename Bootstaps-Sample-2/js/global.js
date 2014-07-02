// JavaScript Document
$(function(){
	
//for home page 
$("#show-btn").click(function(){
		$(".tab-content").toggle("slow");
	})
	
	
			// for back to top 
				var offset = 220;
				var duration = 500;
				$(window).scroll(function() {
					if ($(this).scrollTop() > offset) {
						$('.back-to-top').fadeIn(duration);
					} else {
						$('.back-to-top').fadeOut(duration);
					}
				});
				
				$('.back-to-top').click(function(event) {
					event.preventDefault();
					$('html, body').animate({scrollTop: 0}, duration);
					return false;
				})


	
	
		//	Carousel script for above section
				$('#platinum').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					prev: '#prevp',
					next: '#nextp',
					scroll: 1,
					 swipe : { onTouch : true, onMouse : true },
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
		//	Carousel script for above section
				$('#gold').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					prev: '#prevg',
					next: '#nextg',
					scroll: 1,
					 swipe : { onTouch : true, onMouse : true },
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
				
		//	Carousel script for above section
				$('#silver').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					prev: '#prevs',
					next: '#nexts',
					scroll: 1,
					 swipe : { onTouch : true, onMouse : true },
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
				
				 
		//	Carousel script for above section
				$('#publications').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
				  swipe : { onTouch : true, onMouse : true },
					scroll: 1,
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
		
		 //	Carousel script for above section
				$('#media').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					prev: '#prevm',
					next: '#nextm',
					 swipe : { onTouch : true, onMouse : true },
					scroll: 1,
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
				
				
				
		 //	Carousel script for above section
				$('#govt').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					prev: '#prevgvt',
					next: '#nextgvt',
					 swipe : { onTouch : true, onMouse : true },
					scroll: 1,
					items: {
						 
					 	height: 125,	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});

})