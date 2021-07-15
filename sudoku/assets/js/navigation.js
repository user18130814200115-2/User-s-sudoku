var selected = 0; //set selected cell to the top left initially

window.onload = function () {
	Focus(); //focus the first cell
}


function Focus() {
	selected = Math.min(Math.max(parseInt(selected), 0), 80); //clamp the cell number becasue there are only 80 cells
	var e = document.getElementById("cell-"+selected);
 	e.focus();
 	var val = e.value; //store the value of the element
	e.value = ''; //clear the value of the element
	e.value = val;
}

function Illeagal() {
	//check if the user's input is a number between 1 and 9
	setTimeout(Check, 1);
	var e = document.getElementById("cell-"+selected);
	e.value = e.value.slice(-1);
	if (!(e.value == "1" || e.value == "2" || e.value == "3" || e.value == "4" || e.value == "5" || e.value == "6" || e.value == "7" || e.value == "8" || e.value == "9" )) { e.value = ''}
}

document.onkeypress = function(e) {
	if (e.keyCode == 37) {
		selected += -1; //left
	}
	else if (e.keyCode == 38) {
		selected += -9; //up
	}
	else if (e.keyCode == 39) {
		selected += 1; //right
	}
	else if (e.keyCode == 40) {
		selected += 9; //down
	}
	if (e.key == "SoftLeft" && CurrentSudokuIndex > 0) {
		Load(CurrentSudokuIndex-1); //load the previous sudoku in the array (in load.js)
	}
	else if (e.key == "SoftRight" && CurrentSudokuIndex < 100) {
		Load(CurrentSudokuIndex+1); // load the next sudoku in the array (in load.js)
	}
	else {
		setTimeout(Focus, 1);
	}
}
