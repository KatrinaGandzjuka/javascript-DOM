window.addEventListener('load', function(){
    const HIDE = document.getElementsByClassName("hide_me");
    const BUTTON = document.getElementById("button");

    BUTTON.addEventListener('click', function(){
        Array.from(HIDE).forEach((elements) => {
            elements.style.display = "none";
        })
    });
});