var revealed = 0;

function revealNav() {
    if (revealed == 0) {
        document.getElementById("navbar").style.height = "35px";
        document.getElementById("reveali").className = "fas fa-angle-up";
        revealed = 1;
    } else {
        document.getElementById("navbar").style.height = "0px";
        document.getElementById("reveali").className = "fas fa-angle-down";
        revealed = 0;
    }
}