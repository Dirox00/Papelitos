function clearBox(idName)
{
    var elem = document.getElementById(idName);
    if (elem.style.display === "none") {
        elem.style.display = "block";
      } 
    else {
        elem.style.display = "none";
      }
}