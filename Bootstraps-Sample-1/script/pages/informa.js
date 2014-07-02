// JavaScript Document
/*if($.browser.mozilla) {
    $('.glyphicon-nonescaped').removeClass('glyphicon-nonescaped');
}*/

 
 



 
 
	
		

/*
	Animation for Visitor counter canvas
*/
 

/* parallax effect */
 
$(document).ready(function(){
	

	

 
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

   
});