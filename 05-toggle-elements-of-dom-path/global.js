// Your JavaScript goes here.
window.addEventListener("load", function(){
    const button = document.getElementById("toggle_button");
    const leable = document.querySelectorAll('.second_five li');
    button.addEventListener('click', function(){
        leable.forEach((elements) => {
            if(elements.style.display == 'list-item') {
                elements.style.display = 'none'
            } else {
                elements.style.display = 'list-item'
            }
        });
    });
});