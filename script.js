function searchInput() {
	var header = "https://www.google.com/search?q="
	var option = document.getElementById("Options");
	var strOpt = option.options[option.selectedIndex].value;
	var input = document.getElementById("SearchInput");
	var strIpt = input.value;
	var searchStr = strIpt != "" ? strOpt + '+' + strIpt : strOpt;
	window.open(header + searchStr);
}

function checkKey() {
	if (event.keyCode == 13)
		searchInput()
}