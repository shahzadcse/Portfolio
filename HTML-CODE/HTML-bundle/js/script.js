/* Author: Shahzad Hussain

*/

$('document').ready(function(e) {
    
    // hero carousel for home page
	$('#hero-carousel').carouFredSel({
					auto: true,					 
				   	pagination :{
					   container : '.pager'
					   },			 
					scroll : {
						items : 1,
						duration : 1000 
						} 
				});

 	//	images carousel for thumb gallery 
	$('#overview1').carouFredSel({
	  auto: false,
	  prev: '#prev1',
	  next: '#next1',					 
	  scroll : {
	    items : 1,
	    duration : 500 
	  } 
	});

	//	images carousel for thumb gallery 
	$('#overview2').carouFredSel({
	  auto: false,
	  prev: '#prev2',
	  next: '#next2',           
	  scroll : {
	    items : 1,
	    duration : 500 
	  } 
	});
 

});





