

function Check() {
	var userInput = '';
	for (let i = 0; i < 80; i++) {
		var CurrentCell = document.getElementById("cell-"+i);
		CurrentCell.classList.remove("wrong");
		if (CurrentCell.value == '') {
			userInput += 0
		}
		else {
		  userInput += CurrentCell.value;	
		}
	}
	for (let i = 0; i < 8; i++) {
		var row = userInput.substring(0+9*i, 9+9*i);
		var col = userInput[0+i]+userInput[9+i]+userInput[18+i]+userInput[27+i]+userInput[36+i]+userInput[45+i]+userInput[54+i]+userInput[63+i]+userInput[72+i];
		
		var encounteredIndices = {};
		for(var k = 0; k < 9; k++) {
			if (row[k] != 0 ) {
		  		if (encounteredIndices[row[k]]){ 
		  			document.getElementById("cell-"+(k+9*i)).classList.add("wrong");
		  			document.getElementById("cell-"+(row.indexOf(row[k])+9*i)).classList.add("wrong");
		  		}
		  		else{ encounteredIndices[row[k]] = 1; }
			}
		}
		var encounteredIndices = {};
		for(var k = 0; k < 9; k++) {
			if (col[k] != 0 ) {
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

