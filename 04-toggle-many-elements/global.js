// Your JavaScript goes here.
window.addEventListener('load', function(){
    const TOGGLE = document.getElementsByClassName("toggle_me");
    const BUTTON = document.getElementById("button");
    BUTTON.addEventListener('click', function(){
        Array.from(TOGGLE).forEach((elements) => {
            if(elements.style.display == 'flex') {
                elements.style.display = 'none'
            }else{
                elements.style.display = 'flex'
            }
        });
    });
});