function resetForm(){
  document.getElementById("abc").reset();
}

function back() {
  document.getElementById("mn").style.display = "none";
  document.getElementById("profile").style.float = "left";
}

function returnn() {
  document.getElementById("mn").style.display = "inline-block";

}
// function boild(){
//   document.getElementById("menubar").style.fontWeight = "Bold"
// }


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("menu-bar-1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



