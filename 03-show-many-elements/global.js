window.addEventListener('load', function(){
    const SHOW = document.getElementsByClassName("show_me");
    const BUTTON = document.getElementById("button");

    BUTTON.addEventListener('click', function(){
        Array.from(SHOW).forEach((elements) => {
            elements.style.display = "initial";
        })
    });
});