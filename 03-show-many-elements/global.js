window.addEventListener('load', function(){
    const show = document.getElementsByClassName("show_me");
    const Button = document.getElementById("button");

    Button.addEventListener('click', function(){
        Array.from(show).forEach((elements) => {
            elements.style.display = "initial";
        })
    });
});