console.log("hihi");

// Function to build the Christmas Tree

function tree() {
	var treeCharacter = document.getElementById("character").value;
	var height = document.getElementById("height").value;
	var firstLine = treeCharacter.repeat(1);
	var i = 1;
	var space = " ";
	do {
		console.log(space.repeat((height - 1)) + treeCharacter.repeat(i));
		i += 2;
		height = height - 1;
	} while (height > 0);
};


// Event Listeners
	// Button Event Listeners
var button = document.getElementById("grow");

button.addEventListener("click", function (){
	var treeCharacter = document.getElementById("character").value;
	var treeHeight = document.getElementById("height").value;
	if (treeCharacter.length === 0 || treeHeight.length === 0){
		alert("Please enter a value in both boxes");
	} else tree();
});

	// Return Event Listeners
var returnHeight = document.getElementById("height");
var returnCharacter = document.getElementById("character");
		// Tree Height
returnHeight.addEventListener("keyup", function (){
	var x = event.key;
	if (x === "Enter"){
		var treeCharacter = document.getElementById("character").value;
		var treeHeight = document.getElementById("height").value;
		if (treeCharacter.length === 0 || treeHeight.length === 0){
			alert("Please enter a value in both boxes");
		} else tree();	
	}
});
		// Tree Character
returnCharacter.addEventListener("keyup", function (){
	var y = event.key;
	if (y === "Enter"){
		var treeCharacter = document.getElementById("character").value;
		var treeHeight = document.getElementById("height").value;
		if (treeCharacter.length === 0 || treeHeight.length === 0){
			alert("Please enter a value in both boxes");
		} else tree();	
	}
});