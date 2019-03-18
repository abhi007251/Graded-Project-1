var modal=document.getElementById('myModal');
var btn=document.getElementById("signup1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2=document.getElementById("mymodal2");
var btn2=document.getElementById("signin");
var span2= document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3=document.getElementById("mymodal3");
var btn3=document.getElementById("createpostbtn");
var span3= document.getElementsByClassName("close3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

/* when click on close btn the modal should close */
var x=document.getElementById('closebtnid')
x.onclick=function()
{
  modal3.style.display="none";
}

