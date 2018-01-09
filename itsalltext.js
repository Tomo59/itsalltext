//console.log("DEBUG It's All Text extension");

var textareaList = document.getElementsByTagName("textarea");
for(var i = 0; i < textareaList.length; i++){
  textareaList[i].style.border = "5px solid green";
  var newdiv = document.createElement("DIV");
  newdiv.className += "edit_button"
  //newdiv.appendChild(document.createTextNode("some text"));
  textareaList[i].parentNode.insertBefore(newdiv, textareaList[i].nextSibling);
}

