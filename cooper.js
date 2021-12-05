var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById(body).style.display = "block";
  window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});
}


