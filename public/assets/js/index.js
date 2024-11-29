function setupButton(){
    const btn = document.getElementById("profile");
    if(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            const body = document.querySelector(".top-part");
            body.style.transform = "translateY(100%)";
            const account = document.querySelector(".account-transition");
            account.style.transform = "translateY(0)";
            window.setTimeout(function() {
                window.location.href = 'signup.html';
            }, 500)
        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setupButton();
});