function searchInput() {
	// google search prefx
	var header = "https://www.google.com/search?q="
	
	// get data from checkbox
	var option = document.getElementById("Options");
	var strOpt = option.options[option.selectedIndex].value;
	
	// get data from textbox
	var input = document.getElementById("SearchInput");
	var strIpt = input.value;
	
	// concat string
	var searchStr = strIpt != "" ? strOpt + '+' + strIpt : strOpt;
	var wholeStr = header + searchStr;
	
	// start search
	if (wholeStr != "")
		window.open(header + searchStr);
}

function checkKey() {
	// if press Enter key, do search
	if (event.keyCode == 13)
		searchInput()
}