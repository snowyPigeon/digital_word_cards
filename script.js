let pictures = ["bell", "chair", "door", "egg", "fish"];

function nextCard(){
	let i,
	let (i = 0; i < pictures.length; i++){ //loop which moves the wordless image on with click of 'next' button
		$("#card_pic").html("<img src='" + pictures[i] + ".jpg'/>");
	}
}

function checkCard(){
	if (document.getElementById('inputbox').value == pictures[i])
		{
			document.getElementById('message').value = "Correct!";
			$("#card_wpic").html("<img src='" + pictures[i] + "_word" +".jpg'/>"); //moves word and pic img on if input test correct
		}
		else
		{
			$("#card_wpic").html("<img src=''/>");
			document.getElementById('message').value = "Your answer was wrong. Please have another try.";
		}
		
}