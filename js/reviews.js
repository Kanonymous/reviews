function metro2033(){
  document.title = 'Metro 2033 - Análisis por Kanonymous';

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         document.getElementById("content-changer").innerHTML = xhttp.responseText;
      }
  };
  xhttp.open("GET", "../metro2033.html", true);
  xhttp.send();
}
