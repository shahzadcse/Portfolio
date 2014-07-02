/*!
* home.js (driven from informa.js earlier)
* This file contains the code for the home page of the site.
*
* @project   Informa
* @date      2014-04-08
* @author    Shahzad Hussain, shahzad.hussain@informa.com	
* @licensor  Informa
* @site      Informa.com
*
*/

//tabing for home page 
function _home() {
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