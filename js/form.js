
function checkForm(){
	var a = document.getElementById("name")
	var b = document.getElementById("email")
	if (a.value.length == 0)
		{
			document.getElementById("nameerrormsg").style.display = "block"; a = 0;}
		else {
			document.getElementById("nameerrormsg").style.display = "none";}
	if (b.value.length == 0)
		{document.getElementById("emailerrormsg").style.display = "block"; b = 0}
	else {document.getElementById("emailerrormsg").style.display = "none"; }
	if (b == 0 || a == 0){
		alert("Please fill the information!")
		return false;
	}
}  

(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);




