var selected = 0;

window.onload = function () {
	Focus();
}


function Focus() {
	selected = Math.min(Math.max(parseInt(selected), 0), 80);
	var e = document.getElementById("cell-"+selected);
 	e.focus();
 	var val = e.value; //store the value of the element
	e.value = ''; //clear the value of the element
	e.value = val;
}

function Illeagal() {
	setTimeout(Check, 1);
	var e = document.getElementById("cell-"+selected);
	e.value = e.value.slice(-1);
	if (!(e.value == "1" || e.value == "2" || e.value == "3" || e.value == "4" || e.value == "5" || e.value == "6" || e.value == "7" || e.value == "8" || e.value == "9" )) { e.value = ''}
}

document.onkeypress = function(e) {
	if (e.keyCode == 37) {
		selected += -1;
	}
	else if (e.keyCode == 38) {
		selected += -9;
	}
	else if (e.keyCode == 39) {
		selected += 1;
	}
	else if (e.keyCode == 40) {
		selected += 9;
	}
	if (e.key == "SoftLeft" && CurrentSudokuIndex > 0) {
		Load(CurrentSudokuIndex-1);
	}
	else if (e.key == "SoftRight" && CurrentSudokuIndex < 100) {
		Load(CurrentSudokuIndex+1);
	}
	else {
		setTimeout(Focus, 1);
	}
}
