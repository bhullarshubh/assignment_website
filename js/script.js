function Nextimg() {
    var img=document.getElementById("myimg");
    var x = img.src;
    if(x.includes("1.PNG")) img.src="../images/2.PNG";
    if(x.includes("2.PNG")) img.src="../images/3.PNG";
    if(x.includes("3.PNG")) img.src="../images/4.PNG";
    if(x.includes("4.PNG")) img.src="../images/5.PNG";
    if(x.includes("5.PNG")) img.src="../images/1.PNG";
}

function greencol(x){
    x.style.backgroundColor="#5FFF33";
}

function retaincol(x){
    x.style.backgroundColor="#333";
}

window.onscroll = function() {StickNavigation()};

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function StickNavigation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function result() {
    var newName=document.getElementById("name").value;
    var newSkill=document.getElementById("skill").value;
    var newLevel=document.getElementById("level").value;
         
    var tableRef = document.getElementById("mytable");
    var newRow = tableRef.insertRow(-1);
    var newCell = [newRow.insertCell(0), newRow.insertCell(1), newRow.insertCell(2)];
    var newText = [document.createTextNode(newName), document.createTextNode(newSkill), document.createTextNode(newLevel)];
    var i;
    for(i=0;i<3;++i){
        newCell[i].appendChild(newText[i]);
    }
}

