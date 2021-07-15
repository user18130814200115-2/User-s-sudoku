function Check() {
	var userInput = '';
	for (let i = 0; i < 80; i++) {
		var CurrentCell = document.getElementById("cell-"+i);
		CurrentCell.classList.remove("wrong"); //clear all wrong cells
		if (CurrentCell.value == '') {
			userInput += 0 //a zero is used to prgramically check for empty cells
		}
		else {
		  userInput += CurrentCell.value; //save all entered cell values, we use this later
		}
	}
	for (let i = 0; i < 8; i++) {
		var row = userInput.substring(0+9*i, 9+9*i);
		var col = userInput[0+i]+userInput[9+i]+userInput[18+i]+userInput[27+i]+userInput[36+i]+userInput[45+i]+userInput[54+i]+userInput[63+i]+userInput[72+i];
		
		var encounteredIndices = {};
		for(var k = 0; k < 9; k++) {
			if (row[k] != 0 ) { //loop over rows
		  		if (encounteredIndices[row[k]]){ //see if we encountered the current value earlier in this row
		  			document.getElementById("cell-"+(k+9*i)).classList.add("wrong");
		  			document.getElementById("cell-"+(row.indexOf(row[k])+9*i)).classList.add("wrong");
					//if so, give both the class "wrong"
		  		}
		  		else{ encounteredIndices[row[k]] = 1; } //otherwise list the value as encountered
			}
		}
		var encounteredIndices = {};
		for(var k = 0; k < 9; k++) {
			if (col[k] != 0 ) { //same as rows above (dirty code, I know)
		  		if (encounteredIndices[col[k]]){ 
		  			document.getElementById("cell-"+(k*9+i)).classList.add("wrong");
		  			document.getElementById("cell-"+(col.indexOf(col[k])*9+i)).classList.add("wrong");

		  		}
		  		else{ encounteredIndices[col[k]] = 1; }
			}
		}
	}
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

