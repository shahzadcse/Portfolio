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
var counter = $(".knob");
counter.knob({
  readOnly: true
 ,fgColor: "#5a7cc3"
 ,bgColor: "#d1daee"
 ,inputColor: "#5a7cc3"
 ,thickness: 0.15
 
});
  $('.knob').each(function () {

           var $this = $(this);
           var myVal = $this.attr("rel");
           // alert(myVal);
           $this.knob({

           });

           $({
               text: 0
           }).animate({

               text: myVal 
           }, {
               duration: 2000,
               easing: 'swing',
               step: function () {
                  $this.val(Math.ceil(this.text)).trigger('change');
					$this.find("span.digit").text(Math.ceil(this.text)).trigger('change');
               }
			    
           })

       });
/* parallax effect */
 
$(document).ready(function(){
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

/* Grid and list view js */
 var default_view = 'grid'; // choose the view to show by default (grid/list)
    
    // check the presence of the cookie, if not create "view" cookie with the default view value
   if($.cookie('view') !== 'undefined'){
        $.cookie('view', default_view, { expires: 7, path: '/' });
    }  
    function get_grid(){
        $('.list').removeClass('list-active');
        $('.grid').addClass('grid-active');
        $('.logos-cnt').animate({opacity:0},function(){
            $('.logos-cnt').removeClass('logo-box-list');
		//	$('.logos-cnt').parent().removeClass().addClass('col-sm-6 col-md-3 col-xs-12 col-lg-3');
			$('.logos-cnt').parents('.logo-wrapper').removeClass('listView').addClass('gridView');
            $('.logos-cnt').addClass('logo-box');
            $('.logos-cnt').stop().animate({opacity:1});
			if($('.logo-detail').length > 0 ){
					$('.logo-detail').hide();
				}
				$('.for-list').hide();	
        });
    } // end "get_grid" function
    function get_list(){
        $('.grid').removeClass('grid-active');
        $('.list').addClass('list-active');
        $('.logos-cnt').animate({opacity:0},function(){
            $('.logos-cnt').removeClass('logo-box');
			//$('.logos-cnt').parent().removeClass().addClass('col-lg-12');
			 $('.logos-cnt').parents('.logo-wrapper').removeClass('gridView').addClass('listView');
            $('.logos-cnt').addClass('logo-box-list');
            $('.logos-cnt').stop().animate({opacity:1});
			if($('.logo-detail').length > 0 ){
					$('.logo-detail').hide();
				}
			$('.for-grid').hide();	
        });
    } // end "get_list" function

    if($.cookie('view') == 'list'){ 
        // we dont use the "get_list" function here to avoid the animation
        $('.grid').removeClass('grid-active');
        $('.list').addClass('list-active');
        $('.logos-cnt').animate({opacity:0});
        $('.logos-cnt').removeClass('logo-box');
		//$('.logos-cnt').parent().removeClass().addClass('col-lg-12');
		 $('.logos-cnt').parents('.logo-wrapper').removeClass('gridView').addClass('listView');
        $('.logos-cnt').addClass('logo-box-list');
        $('.logos-cnt').stop().animate({opacity:1}); 
    } 

    if($.cookie('view') == 'grid'){ 
        $('.list').removeClass('list-active');
        $('.grid').addClass('grid-active');
        $('.logos-cnt').animate({opacity:0});
            $('.logos-cnt').removeClass('logo-box-list');
		//	$('.logos-cnt').parent().removeClass().addClass('col-sm-6 col-md-3 col-xs-12 col-lg-3');
			$('.logos-cnt').parents('.logo-wrapper').removeClass('listView').addClass('gridView');
            $('.logos-cnt').addClass('logo-box');
            $('.logos-cnt').stop().animate({opacity:1});
    }

    $('#list').click(function(){   
        $.cookie('view', 'list'); 
		get_list();
		
    });

    $('#grid').click(function(){ 
        $.cookie('view', 'grid'); 
        get_grid();
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
   });	
  
   
});