// Your JavaScript goes here.
window.addEventListener('load', function(){
    const toggle = document.getElementsByClassName("toggle_me");
    const button = document.getElementById("button");
    button.addEventListener('click', function(){
        Array.from(toggle).forEach((elements) => {
            if(elements.style.display == 'flex') {
                elements.style.display = 'none'
            }else{
                elements.style.display = 'flex'
            }
        });
    });
});