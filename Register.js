

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
window.alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
window.alert("You have entered an invalid email address!");
document.form1.text1.focus();

return false;
}
}

