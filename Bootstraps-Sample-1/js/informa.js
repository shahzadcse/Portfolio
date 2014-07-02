// JavaScript Document
/*if($.browser.mozilla) {
    $('.glyphicon-nonescaped').removeClass('glyphicon-nonescaped');
}*/
// Activates the Carousel
 $('.carousel').carousel({
   interval: 5000
 })

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})

//showing search panel 

$(".search-icon.visible-xs").on('click',function(){
	
		$(this).parent().find(".search-panel").slideToggle("slow");
	})
 



 
//tabing for home page

$('#hometab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#hometab a[href="#show"]').tab('show') // Select tab by name
 
 


/* tabing for Agenda page */

$('#agenda a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#agenda a[href="#day1"]').tab('show') // Select tab by name
 
 
  
	if($(document).find('#platinum').length > 0 ) {
		//	Responsive layout, resizing the items
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
	}
		//	Responsive layout, resizing the items
		if($(document).find('#gold').length > 0 ) {
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
		}
		if($(document).find('#silver').length > 0 ) {
		//	Responsive layout, resizing the items
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
		}
			if($(document).find('#silver1').length > 0 ) {
		//	Responsive layout, resizing the items
				$('#silver1').carouFredSel({
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
							max: 1
						}
					}
				});
		}
			if($(document).find('#publications').length > 0 ) {
				 
		//	Responsive layout, resizing the items
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
			}
			if($(document).find('#media').length > 0 ) {
		 //	Responsive layout, resizing the items
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
			}
			
			if($(document).find('#media1').length > 0 ) {
		 //	Responsive layout, resizing the items
				$('#media1').carouFredSel({
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
							max: 1
						}
					}
				});
			}	
				
			if($(document).find('#govt').length > 0 ) {	
		 //	Responsive layout, resizing the items
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
			}
			// carousel for Testimonial 
					if($(document).find('#testimonial').length > 0 ) {	
				$('#testimonial').carouFredSel({
					auto: true,
					responsive: true,
					width: '100%',
					  swipe : { onTouch : true, onMouse : true }, 
					scroll : {	items : 1,
								fx : "fade",
								duration: 1000 //The duration of the scroll animation
							}   ,
					items: { 
					 	 
						visible: {
							min: 1,
							max: 1
						}
					}
				});
					}
/*
	Animation for Visitor counter canvas
*/
 

/* parallax effect */
 
$(document).ready(function(){
	

//home page video gallery
var index = 0;
	var images = $("#v-gallery img");
	var thumbs = $("#thumbs img");
	var imgHeight = $(thumbs).attr("height");
	 
	$(thumbs).slice(0,3).clone().appendTo("#thumbs");
	for (i=0; i<thumbs.length; i++)
	{
		$(thumbs[i]).addClass("thumb-"+i);
		$(images[i]).addClass("image-"+i);
	}
	
	$("#nextvideo").click(sift);
	show(index);
	setInterval(sift, 8000);
	
	function sift()
	{
		if (index<(thumbs.length-1)){index+=1 ; }
		else {index=0}
		show (index);
	}
	
	function show(num)
	{
		$(images).fadeOut(400);
		$(".image-"+num).stop().fadeIn(400);
		var scrollPos = (num+1)*imgHeight;
		$("#thumbs").stop().animate({scrollTop: scrollPos}, 400);		
		console.log(scrollPos, "img.image-"+num);
	}

	
// BB specific script 	
function detectBB() { 

if(window.innerWidth <= 768 && window.innerHeight <= 480) {
 if(  navigator.userAgent.match(/BlackBerry/i) )
 {	
 	$(".navbar-inverse").hide(); 
    $("#accordion").hide();
	$("#vgallery").parent().parent().hide();
	$(".spinners-container").hide();
	$(".delegate-img").hide();
	$(".testimonials").hide();
	
  }
 else {
	   $(".navbar-inverse").show(); 
	   $("#accordion").show();
	   $("#vgallery").parent().parent().show();
	   $(".spinners-container").show();
	   $(".delegate-img").show();
	   $(".testimonials").show();
  }
}
}
	
	
	 	$("#voverlay_overlay").find('object').next('div').hide();
      /* affix the navbar after scroll below header */
			$('#nav').affix({
				  offset: {
					 top:  $('header').height()-$('#nav').height() 
				  }
			});	
			
			/* highlight the top nav as scrolling occurs */
			$('body').scrollspy({ target: '#nav' })
			
			/*  smooth scrolling for scroll to top */
			 $('.scroll-top').click(function(){
			  $('body,html').animate({scrollTop:0},1000);
			}) 
			
			/* smooth scrolling for nav sections */
			$('#nav .navbar-nav li>a').click(function(){
			  var link = $(this).attr('href');
			  var posi = $(link).offset().top+20;
			  $('body,html').animate({scrollTop:posi},700);
			}) 
			
	
	
	 $('ul.tree').hide();
	
 /* toggling sidebar menu*/
 $('a.tree-toggler').click(function () {
	if($(this).parent().children('ul').length > 0){	 
  if($(this).hasClass('opened')) {
  $(this).removeClass('opened');
  }
  else{
	  $(this).addClass('opened');
	  }
	}
  $(this).parent().children('ul.tree').toggle(300);
});
 
    /* filter */
   /* $('.category-menu ul li').click(function(){
        var CategoryID = $(this).attr('category');
        $('.category-menu ul li').removeClass('cat-active');
        $(this).addClass('cat-active');
        
        $('.logos-cnt').each(function(){
            if(($(this).hasClass(CategoryID)) == false){
               $(this).css({'display':'none'});
            };
        });
        $('.'+CategoryID).fadeIn(); 
        
    });
*/
/* accordion details for exhibitor logos */
$('.close').click(function(){
	$(this).parents('.logo-detail').fadeOut(); 
 })
 
 


// for exhibitor page
/*$(".exhibitor-detail").off().on('click',function(){
	
	  
	var logoId = $(this).attr("rel"),
	 detailDiv =  $('.logo-detail-'+logoId),
	 ht= $(this).height(); 
	// alert(ht)
 
 if($(this).hasClass('gridView')){
	 var  divPosGrid = $(this).find('.logo-box').offset(),
	leftPG = divPosGrid.left, topPG =  divPosGrid.top;
	
	 	$('.logo-detail-'+logoId).css({ 'top':(topPG - ht - 80)+'px'});
		
		$('.logo-detail-'+logoId).find('.pointer').css({ 'left':(leftPG - 200)+'px'});
 
	 }	
	 else {
		 var  divPosList = $(this).offset(), 
			leftPL = divPosList.left, topPL = divPosList.top -  $(this).scrollTop(); 
		 	$('.logo-detail-'+logoId).css({ 'top':(topPL + ht)+'px' });
			$('.logo-detail-'+logoId).find('.pointer').css({ 'left':0+'px'});
		 } 
	 
	$('.logo-detail-'+logoId).fadeToggle( "fast", "linear" );
  
		
	})

 */ 
$(".exhibitor-detail").off().on('click',function(){ 
	 $('.logo-detail').hide();
	 $(this).next('.logo-detail').fadeToggle("slow","linear");
 })


$( ".logo-cont" ).hover(function() {
      $(this).find('.logo-profile').stop(true,true).slideDown('fast');
   }, function() {
      $(this).find('.logo-profile').stop(true,true).slideUp('fast');
   })    
   
});