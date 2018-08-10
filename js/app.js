$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value)){
			alert("Invalid Roll No.");
			this.value="";
			$(this).focus();
		}
	});
	$('#sname').on('keypress',function(e){
		if(/[^a-zA-Z ]/.test(e.key)){
			alert("Invalid name, only alphabets and spaces allowed");
			this.value="";
			$(this).focus();
			return false;
		}
	});
	$('#address').on('blur',function(){
		if(this.value.length<50 && this.value.length>150){
			alert("Invalid Address. Add length should be between 50 & 150 characters.");
			this.value="";
			$(this).focus();
		}
	});
	$('#semail').on('blur',function(){
		if(/((\w*.?_?-?\d*\w+)@(\w*-?.?\d*\w+).(\w*))/.test(this.value)){
			alert("Invalid Email");
			this.value="";
			$(this).focus();
		}
});