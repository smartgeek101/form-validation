var email = document.forms['myform']['email'];
var password = document.forms['myform']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pass_verify);

function validated(){

	if (email.value.length < 10)
	{
		email.style.border="1px solid red"
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 4 )
	{
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
}
function email_verify(){

	if (email.value.length >= 8)
	{
		email.style.border = "1px solid #ddd";
		email_error.style.display = "none";
		return true;
	}


}
function pass_verify()
{
	if (password.value.length >= 4)
	{
		password.style.border = "1px solid #ddd";
		pass_error.style.display = "none";
		return true
	}
}