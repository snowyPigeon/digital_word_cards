let pictures = ["bell", "chair", "door", "egg", "fish"],index=0;
// print(pictures.length)
// function nextCard(){
// 	//let i,
// 	let(i = 0; i < pictures.length; i++){ //loop which moves the wordless image on with click of 'next' button
// 		$("#card_pic").html("<img src='" + pictures[i] + ".jpg'/>");
// 	}
// }
function nextImage() {
    index+=1;
    if (index > pictures.length - 1) {
     index = 0;
    }
	console.log(index);
	//$("#card_pic").html("<img src='" + pictures[index] + ".jpg'/>");
	document.getElementById('card_pic').src= pictures[index] + ".jpg"
	document.getElementById("card_pic").width = "300";
	document.getElementById("card_pic").height = "300";
	document.getElementById('card_wpic').src= "logo.jpg"
	document.getElementById("card_wpic").width = "300";
	document.getElementById("card_wpic").height = "300";
    //document.getElementById('imgsrc').src = images[index];
	document.getElementById('inputbox').value=''
	document.getElementById('message').value = "";

}
function checkCard(){
		if (document.getElementById('inputbox').value == pictures[index])
		{
			document.getElementById('message').value = "Correct!";
			//console.log("<img src='" + pictures[index] + "_word" +".jpg'/>");
			document.getElementById('card_wpic').src= pictures[index] + "_word.jpg"
			document.getElementById("card_wpic").width = "300";
			document.getElementById("card_wpic").height = "300";
			//$("#card_wpic").html("<img src='" + pictures[index] + "_word.jpg'/>");
			//$("#card_wpic").html("<img src='" + pictures[index] + "_word" +".jpg'/>"); //moves word and pic img on if input test correct
		}
		else
		{
			document.getElementById('card_wpic').src= "logo.jpg"
			document.getElementById("card_wpic").width = "300";
			document.getElementById("card_wpic").height = "300";
			//$("#card_wpic").html("<img src='logo.jpg'/>");
			document.getElementById('message').value = "Wrong Ans.Have another try.";
		}
}