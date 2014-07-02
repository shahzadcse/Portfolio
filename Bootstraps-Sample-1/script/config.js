/*!
* NAME OF THE FILE (e.g. config.js)
* This file contains the code for the Filter controls.
*
* @project   Informa
* @date      2014-03-30
* @author    Shahzad Hussain, shahzad.hussain@informa.com	
* @licensor  Informa
* @site      Informa.com
*
*/

/* Why do we need config?
* All URLs needed by the JavaScript
* Any strings that are displayed to the user
* Any HTML that needs to be created from JavaScript
* Settings (i.e., items per page)
* Repeated unique values
* Any value that may change in the future
*/

(function (INFORMA, undefined) {

        INFORMA.config = {
                language: 'english',
                debug: true,
                dealerResultCount: 5,
               // fbAppId:'185651548238164',
                errorMessages: {
                        allFieldReq:'All fields are required.',
                        email: "Please enter a valid email address.",
                        phone: "Valid Phone number format is 999-999-9999.",
                        TIMEOUT:"Error: TIMEOUT. Please try again.",
                        POSITION_UNAVAILABLE:"Error:POSITION_UNAVAILABLE. Please try again.",
                        PERMISSION_DENIED:"Error:PERMISSION_DENIED. Please try again.",
                        UNKNOWN_ERROR:"Error:UNKNOWN_ERROR. Please try again.",
                        ERROR_MESSAGE:"Error: Could not find your searched location. Please try again.",
                        ZIP_ADDRESS_REQUIRED:"Please enter a valid Zip Code or Address.",
                        CURRENT_LOCATION:"Current Location",
                        MI_CONTACTUS_NO:"1-888-971-3804"
                }
			/*	,
                labels: {
                        searchAddressPlaceholder: "Enter ZIP or address"
                },
                gMapButtonLabel: {
                        show: "Show Map",
                        hide: "Hide Map"
                },
                comingSoon: {
                        4612: "Coming Summer 2013"
                }*/
        };

/**
 * Check to evaluate whether 'INFORMA' exists in the global namespace - if not, assign window.INFORMA an object literal.
 */
}(window.INFORMA = window.INFORMA || {}));