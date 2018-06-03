function searchInput() {
	// google search prefx
	var header = "https://www.google.com/search?q="
	
	// get data from checkbox
	var option = document.getElementById("Options");
	var strOpt = option.options[option.selectedIndex].value;
	
	// get data from textbox
	var input = document.getElementById("SearchInput");
	var strIpt = input.value.trim();
	
	// concat string
	var searchStr = strIpt != "" ? strOpt + '+' + strIpt : strOpt;
	
	// start search
	if (searchStr.length != 0)
		window.open(header + searchStr);
	else
		alert('Please provide searching keywords...')
}

function checkKey() {
	// if press Enter key, do search
	if (event.keyCode == 13)
		searchInput()
}