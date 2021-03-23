// Your JavaScript goes here.
window.addEventListener("load", function(){
    const BUTTON = document.getElementById("toggle_button");
    const LEABLE = document.querySelectorAll('.second_five li');
    BUTTON.addEventListener('click', function(){
        LEABLE.forEach((elements) => { 
            if(elements.style.display == 'list-item') {
                elements.style.display = 'none'
            } else {
                elements.style.display = 'list-item'
            }
        });
    });
});

//forEach(function(toggle){})