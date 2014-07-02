 
/*!
* INFORMA.main.js
* This file contains the code for the Filter controls.
*
* @project   Informa
* @date      2014-03-30
* @author    Shahzad Hussain, shahzad.hussain@informa.com	
* @licensor  Informa
* @site      Informa.com
*
*/

/*
* INFORMA main js
*/
(function (INFORMA, $, undefined) {

    /**
     * Logging function, for debugging mode
     */
	$.log = function (message) {
        if (INFORMA.config.debug && (typeof window.console !== 'undefined' && typeof window.console.log !== 'undefined') && console.debug) {
            console.debug(message);
        } /*else {
            alert(message);
        }*/
    };
	
	/*
     * Singletons serve as a namespace provider which isolate implementation code
     * from the global namespace so as to provide a single point of access for functions,
     * this is useful for organizing code into logical sections.
     * It is possible to put parentheses around this structure to instantiate it immediately after it's parsed.
     * This way it's always present when the script is executed and doesn't have to be instantiated separately.
	*/
    INFORMA.main = (function () {
        function _informa() {

            /* Store this to avoid scope conflicts */
            var _this = this;         
 

            /**
             * This function check for page level element
             * If element exists then functions needed on that page will execute
             */
            var pageSpecific = function() {
				
				// for home page 
				if($('#featured').length > 0) { 
							fn_home();
					}
				 // for agenda page 
				if($('#agenda').length > 0) { 
							fn_agenda();
					}
				
				
				 // for agenda page 
				if($('#grid-list-view').length > 0) { 
							fn_exhibitor();
					}
				
				// for left side navigation 
				if($("#side-menu").length > 0) {
					
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
						
						
					}
				
				
				// for sponsor's logo carousel 
                if($("#sponsors").length > 0) {
					
					 //	carousel for platinum logos
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
					//	carousel for gold logos
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
							
					//	carousel for silver logos 
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
							
							 
					//	carousel for Responsive layout, resizing the items
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
					
					 //	carousel for media logos
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
							
							
							
					 //	carousel for govt. logos 
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
				   
                } 
				
				//for common for all 
				 _this.method();
            };

           this.method = function(){
			 
			 
			// fixed navbar calling for all pages
			  $('#nav').affix();
  
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
		   // common close used for exhibitor logos *
		
			$('.close').click(function(){
				$(this).parents().fadeOut(); 
			 })
			
		   };
			 
  	
			// functions used only in home page. 
			
			var fn_home = function() {
				 $('#hometab a').click(function (e) {
				  e.preventDefault()
				  $(this).tab('show')
				}) 
				$('#hometab a[href="#show"]').tab('show') // Select tab by name 
				$('.slide-bg').cycle({ 
								fx:     'fade', 
								speed:  '10000', 
								next:   '.da-arrows-next', 
								prev:   '.da-arrows-prev' 
							});  
				$('#da-slider').cslider();
			}
			
			
			// functions used in agenda page 
			
			var fn_agenda = function () {
				
				/* tabing for Agenda page */

					$('#agenda a').click(function (e) {
					  e.preventDefault()
					  $(this).tab('show')
					})
					
					$('#agenda a[href="#day1"]').tab('show') // Select tab by name
				}
	
			// function used in exhibitor page 
			
			var fn_exhibitor = function(){ 
				
					 $(".exhibitor-detail").off().on('click',function(){ 
						 
						 $(this).next('.logo-detail').fadeToggle("slow","linear");
					 })
					
					
					$( ".logo-cont" ).hover(function() {
						  $(this).find('.logo-profile').stop(true,true).slideDown('fast');
					   }, function() {
						  $(this).find('.logo-profile').stop(true,true).slideUp('fast');
					   })    
						 
				
				}
	  
            /**
             * Init call
             */
            this.init = function () {
                pageSpecific(); 
              
            };

            return this.init(); /*initialize the init()*/
        }

        return new _informa(); /*creating a new object of main rather then a function*/
    }());

/**
 * Check to evaluate whether 'INFORMA' exists in the global namespace - if not, assign window.INFORMA an object literal
 */
}(window.INFORMA = window.INFORMA || {}, jQuery));