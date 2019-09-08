function hideReveal() {
    console.log("works hideReveal");
    document.getElementById("reveal-info").style.opacity = "0";
    document.getElementById("reveal-info").style.width = "0";
    document.getElementById("reveal-info").style.height = "0";
    // document.getElementById("reveal-info").style.display = "none";
    setTimeout(hideMainBodyText, 125);
}

function hideMainBodyText() {
    console.log("works hideMainBodyText");
    document.getElementById("main-reveal-h1").style.opacity = "0";
    document.getElementById("main-reveal-h1").style.fontSize = "0";
    setTimeout(revealInfo, 250);
    // document.getElementById("main-reveal-h1").style.width = "0";
    // document.getElementById("main-reveal-h1").style.height = "0";
}

// Recursive Method
function revealInfo() {

}