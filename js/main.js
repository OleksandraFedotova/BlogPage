var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("fountainG").style.display = "none";
  document.getElementById("main-content").style.display = "grid";
}