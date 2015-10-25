$(document).ready(function(){

	//alert("hello world");
	
	var FirstName;
	var LastName;
	var Who = new Array();
	var Triggers;
	var LOI;
	var gender;
	var state;
	var msg;
	var email;

	$("mySubmitButton").click(function(){
		//grab value from text area
		FirstName = $("#FirstName").val();
		//grab value from password 
		LastName = $("#LastName").val();
		//grab textboxes
		$('input[name="Who"]:checked').each( function() {
			//PLAIN JAVASCRIPT
			console.log(this.value);
			//JQUERY (need to wrap this in $() aka Jquery)
			console.log( $(this).fadeOut() );
			//PUSHES VALUES INTO AN ARRAY, for each value that is checked it will push value into array
			weekday.push( this.value );

		});

		//grab radio buttons
		$('input[name="gender"]:checked').each( function() {
			//PLAIN JAVASCRIPT
			console.log(this.value);
			//JQUERY (need to wrap this in $() aka Jquery)
			console.log( $(this).fadeOut() );

			gender = this.value;
		});
		//grab select menu option
		state = $("#states").val();
		//grab text area data
		message = $("#message").val();
		email = $("#email").val();

		//Concatenation -- validate first and then send to server 
		console.log("FRISTNAME: " + FirstName);
		console.log("LASTNAME: " + LastName);
		console.log("WHO: " +Who);
		console.log("TRIGGERS: " +Triggers);
		console.log("LOI: " +LOI);
		console.log("GENDER: " +gender);
		console.log("STATE: " +state);
		console.log("MESSAGE: " +message);
		console.log("EMAIL: " +email);

		if( userName == ""){

			alert("WHOOPS");
		}


	});

});