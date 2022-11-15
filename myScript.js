
function displaydate() {
	var todays_date = new Date();
	document.getElementById("target").innerHTML = todays_date;
	setTimeout(displaydate);
}
	displaydate();
	


function Forms(){
	var F_Name = document.forms ["Queries"] ["Fname"].value;
	var L_Name = document.forms["Queries"] ["Lname"].value;
	var E_mail= document.forms["Queries"]["Email"].value;
	var location= document.forms["Queries"]["Address"].value;
	var message= document.forms["Queries"]["Message"].value;
		if ( F_Name==""|| L_Name==""|| E_mail=="" ||location==""||message=="")
			alert("Empty field found, Please enter all the field");
		else
			alert("Thank you for your Feedback. We will reach out soon.");
}