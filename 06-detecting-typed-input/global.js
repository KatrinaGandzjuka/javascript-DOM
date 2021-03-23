// Your JavaScript goes here.
window.addEventListener('load', function(){
    const FIELD = document.getElementById("full_name");
  FIELD.addEventListener("keyup", function() {
    document.getElementById("greeting").innerText = "Hello there, " + field.value + "!"
  });
});