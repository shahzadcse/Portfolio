(function(INFORMA, undefined) {
    //dom ready
    $(function() {
        initializeHeader();   
		fn_home();   
    });

	var initializeHeader = function(){
		alert('shahzad');
	}
	
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
	
}(window.INFORMA = window.INFORMA || {}));
