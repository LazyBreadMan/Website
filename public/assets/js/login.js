function setupButton(){
    const btn = document.querySelector(".btn2");
    if(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            const body = document.querySelector(".Container");
            body.style.filter = "blur(20px)";
            body.style.transform = "scale(0)"
            window.setTimeout(function() {
                window.location.href = 'signup.html';
            }, 500)
        })
    }

    const loginbtn = document.querySelector(".btn1")
    if(loginbtn){
        loginbtn.addEventListener("click"), function(event) {
            event.preventDefault();
            window.location.href = 'index.html';
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setupButton();
});