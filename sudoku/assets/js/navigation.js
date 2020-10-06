var selected = 0;


window.onload = function () {
	Focus();
}


function Focus() {
	selected = Math.min(Math.max(parseInt(selected), 0), 80);
	var e = document.getElementById("cell-"+selected);
 	e.focus();
 	if (e.readOnly == false) { e.select(); }
 	if (e.value == 0) { e.value = ''; }
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
	else {
		setTimeout(Check, 1);
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
