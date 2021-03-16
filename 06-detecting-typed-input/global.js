// Your JavaScript goes here.
window.addEventListener('load', function(){
    const field = document.getElementById("full_name");
  field.addEventListener("keyup", function() {
    const div = document.getElementById("greeting");
    div.innerHTML = ("Hello there, " + field.value + "!");
  });
});