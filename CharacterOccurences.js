//global variables

var searchStr;
var ch;
var outResult;

//DOM function

function getAllDomElement() {
    document.getElementById('searchButton').addEventListener("click", searchOccurences);
    searchStr = document.getElementById('searchString');
    ch = document.getElementById('characters');
    outResult = document.getElementById('output');
}

//SearchOccurences function

function searchOccurences(e) {
    e.preventDefault();
    var count = 0;
    var chValue = document.getElementById('characters').value.charAt(0).toLowerCase();
    var searchStr = document.getElementById('SearchString').value.toLowerCase();
    var result = "";
    var pos = 0;

    while (true) {
      pos = searchStr.indexOf(chValue, pos);
      if (pos != -1) {
        count++;
        pos++;
      }
      else {
        break;
      }
    }

    if (count == 0) {
     result =  "The character " + chValue + " not found";
    }
    else {
      result = count + " occurence(s) of '"+chValue+"' found";
    }
    outResult.innerHTML = result;

}

//end
window.addEventListener("load", getAllDomElement, false);
