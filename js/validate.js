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
	if(document.getElementById('user-email').value!="" && document.getElementById('Subject').value!="" && document.getElementById('Message').value!=""){
		var contact=document
	}

}

var email=document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false);

var subject=document.getElementById('Subject');
subject.addEventListener('blur',checkSubject,false);

var submit=document.getElementById('submit-btn');
submit.addEventListener('click',submitForm,false);


