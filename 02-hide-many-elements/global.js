window.addEventListener('load', function(){
    const hide = document.getElementsByClassName("hide_me");
    const Button = document.getElementById("button");

    Button.addEventListener('click', function(){
        Array.from(hide).forEach((elements) => {
            elements.style.display = "none";
        })
    });
});