/*!
 * Summit Range Input 1.0.0 (http://summitindia.com/)
 * Author Vinod Kumar Dhaker
 */

(function($){
$.fn.summitRangeInput = function ( options ) 
{
	
	var defaults = {
			rangeFrom         : '#rangeFrom',
			rangeTo         : '#rangeTo',
			separator         : '#separator',
		},
		
    settings = $.extend( {}, defaults, options );
 

	

 return this.each(function()
        {
	 	
    $(this).on("click", function () {
		
		
				
		if (!$(settings.rangeTo).val() || $(settings.rangeTo).val().length === 0) {

		    // $(settings.rangeFrom).focus(); // commented by sarvesh 19/06/2018
        } else {
		    //  $(settings.rangeTo).focus(); // commented by sarvesh 19/06/2018

        }

    });

    if ($(settings.rangeTo).focus == true) {
     //   $(settings.separator).css("visibility", "visible");
    } else {
     //   $(settings.separator).css("visibility", "hidden");

    }

    $(this).on('keyup', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            e.preventDefault();
			
            if (!$(settings.rangeFrom).val().length) {
             //   $(settings.separator).css("visibility", "hidden");
              //  $(settings.rangeFrom).focus();  // commented by sarvesh 19/06/2018
            } else {
                $(settings.separator).css("visibility", "visible");
                // $(settings.rangeTo).focus(); // commented by sarvesh 19/06/2018
            }
        }else{

            if (!$(settings.rangeTo).val().length) {
                //  $(settings.rangeFrom).focus();  // commented by sarvesh 19/06/2018
              //  $(settings.separator).css("visibility", "hidden");
            } else {
                //  $(settings.rangeTo).focus();  // commented by sarvesh 19/06/2018
             //   $(settings.separator).css("visibility", "visible");
            }
        }
    });
 
});
//return $(this);
}
})(jQuery)


        
	
	