function checkEmail(e)
{
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value))
	{
		alert("Email is Invalid only a-z A-Z 0-9 . _ are allowed");
	element.value="";
	return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){
		alert("Email is Invalid only a-z A-Z are allowed");
		element.value="";
		return false;
	}
	if(!/[@]/.test(element.value)){
		alert("Email is Invalid, @ is required");
		element.value="";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert("Email is Invalid, . is required");
		element.value="";
		return false;
	}
return true;
}

function checkSubject(e){
	var element=e.target;
	if(^/[a-zA-Z]/.test(element.value)){
		alert("Subject is Invalid only a-z A-Z are allowed");
		element.value="";
		return false;
	}
	return true;
}

function submitForm(e){

	e.preventDefault();
	if(document.getElementById('user-emial').value!="" && document.getElementById('message').value!=""){
		var contact=document.getElementsByClass('contact-form');
		contact[0].innerHTML = "<h3>Thank You for Feedback. I'll get you shortly"
	}


}

var email=document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false);

var subject=document.getElementById('Subject');
subject.addEventListener('blur',checkSubject,false);

var submit=document.getElementById('submit-btn');
submit.addEventListener('click',submitForm,false);


