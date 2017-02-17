$(function(){
	$.urlParam = function(name){
    	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results==null){
	    	return null;
	    	}
	    else{
		    return results[1] || 0;
		    }
    	}
    
    if ($.urlParam('email')) {
	    $("#email").val($.urlParam('email').replace('%40','@'));    
		}
	
	// if ($.urlParam('survey_id')) {
	//     $("#SURVEY_ID").val($.urlParam('survey_id'));    
	// 	}
	
	$("#email-submit").on("click",function(e){		
		e.preventDefault();
		var email = $("#email").val();
		// var surveyID = $("#SURVEY_ID").val();
		var errorBlock = $("#error");
		var errorCount = 0;
		
		$("#email").removeClass("error");
				
		if (email == "" || email == "Email") {
			$("#email").addClass("error");
			errorCount++;
			}
		if ((email != "") && (!isValidEmail(email))) {
			$("#email").addClass("error");
			$("#email-error").html("That email address is not valid!");
			errorCount++;
			}
		
		
		if (errorCount != 0) {
			$("#error").html("Please enter your email to unlock");
			var offset = $("#error").offset();
			$("html, body").animate({ scrollTop: offset.top }, 250);
			}
		else {
			if (!isValidEmail(email)) {
				errorBlock.html("Please enter a valid email");
				}
			else {
				var url = "https://secure3.convio.net/wcs/site/CRAdvocacyAPI?method=takeAction&api_key=zooapikey&v=1.0&alert_id=833&alert_type=action&first_name="+first+"&last_name="+last+"&email="+email+"&street1="+street1+"&city="+city+"&state="+state+"&zip="+zip;
				$.ajax({
					  type: "POST",
					  url: url
					})
					.always(function(){
					 	$("#PetitionForm").animate({ opacity: 0 }, 150, function(){
						 	$("#PetitionForm").hide();
						 	$("#petition-thanks").css({ opacity: 0 }).show().animate({ opacity: 1 }, 150);
					 	});
					});
				}
			}
		});	
	function isValidEmail(str) {
	   	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	   	if (filter.test(str)) {
	   		return true;
	   		}
	   	else {
	   		return false;
			}
		}
	});