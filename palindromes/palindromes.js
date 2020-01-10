const palindromes = function(text) {
  let formatText = text.toLowerCase().replace(/[ !,.]/g, "");
  let halfText = formatText.substr(0,(formatText.length / 2));

  if(formatText.length % 2 != 0){halfText = formatText.substr(0,((formatText.length-1)/2))}
  
  let newString = "";

  for (i = formatText.length - 1; i >= 0; i--){
  	newString += formatText[i];
  }
  let lastText = newString.substr(0,halfText.length);

  return(halfText == lastText);
}



module.exports = palindromes
