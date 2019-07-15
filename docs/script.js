window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").style.height = "25px";
        document.getElementById("main").style.paddingTop = "30px";
        document.getElementById("reveal").style.height = "25px";
    } else {
        document.getElementById("header").style.height = "65px";
        document.getElementById("main").style.paddingTop = "80px";
        document.getElementById("reveal").style.height = "0px";
    }
}