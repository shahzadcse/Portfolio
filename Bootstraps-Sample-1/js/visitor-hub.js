
$(document).ready(function(){
 	// Cache the Window object
	$window = $(window);

 
 
function parallax(){
   var pxFromBottom = $('#hub-content').height();
    if ($(window).scrollTop()  >   pxFromBottom ) {
        $('#hub-content').fadeOut('slow');
    } else {
        $('#hub-content').fadeIn('slow')
    }
}

	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){


		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;

		// When the window is scrolled...
	    $(window).scroll(function() {
 		//	parallax();
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {

				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 

				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}

				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });

				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {

					// Cache the sprite
					var $sprite = $(this);

					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

					$sprite.css({ backgroundPosition: coords });													

				}); // sprites

				// Check for any Videos that need scrolling
				$('[data-type="video"]', $self).each(function() {

					// Cache the video
					var $video = $(this);

					// There's some repetition going on here, so 
					// feel free to tidy this section up. 
					var yPos = -($window.scrollTop() / $video.data('speed'));					
					var coords = (yPos + $video.data('offsetY')) + 'px';

					$video.css({ top: coords });													

				}); // video	

			}; // in view

		}); // window scroll

	});	// each data-type


}); // close out script



// for animating the counter on scroll	
		var away = false;
		var counter = $(".knob");
		counter.knob({
		  readOnly: true
		 ,fgColor: "#5a7cc3"
		 ,bgColor: "#d1daee"
		 ,inputColor: "#5a7cc3"
		 ,thickness: 0.15
		 
		});

 


   $(document).scroll(function() {
					if ($(document).scrollTop() > 0) {
						if (!away) {
							away = true;
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
							 
						}
					} else {
						away = false;
						 
					}
				});

     