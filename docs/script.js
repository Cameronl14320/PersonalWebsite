var revealed = 0;

function revealNav() {
    if (revealed == 0) {
        document.getElementById("navbar").style.height = "30px";
        revealed = 1;
    } else {
        document.getElementById("navbar").style.height = "0px";
        revealed = 0;
    }
}