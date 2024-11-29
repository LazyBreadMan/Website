function setupButton(){
    const btn = document.querySelector(".login-btn");
    if(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            const body = document.querySelector(".Container");
            body.style.filter = "blur(20px)";
            window.setTimeout(function() {
                window.location.href = 'login.html';
            }, 500)
        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setupButton();
});