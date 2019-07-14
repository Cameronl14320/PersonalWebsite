window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "0px";
        document.getElementById("main").style.paddingTop = "0px";
    } else {
        document.getElementById("header").style.height = "125px";
        document.getElementById("main").style.paddingTop = "130px";
    }
}