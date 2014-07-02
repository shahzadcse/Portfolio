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
		//	Responsive layout, resizing the items
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
				
			// carousel for Testimonial 
				
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

/*
	Animation for Visitor counter canvas
*/
 

/* parallax effect */
 
$(document).ready(function(){
	 $('ul.tree').hide();
	 
/* tabs  */

  $('.tabs-horizontal').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);

                $name.text($tab.text());

                $info.show();
            }
        });

       /* $('#verticalTab').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true
        });	 */
	 
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
	 
	 $(this).next('.logo-detail').fadeToggle("slow","linear");
 })


$( ".logo-cont" ).hover(function() {
      $(this).find('.logo-profile').stop(true,true).slideDown('fast');
   }, function() {
      $(this).find('.logo-profile').stop(true,true).slideUp('fast');
   })    
   
});