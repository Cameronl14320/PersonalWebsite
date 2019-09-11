var hidden = false;

function hideReveal() {
    console.log("works hideReveal");
    if (hidden == false) {
        document.getElementById("reveal-info").style.opacity = "0";
        document.getElementById("reveal-info").style.width = "0";
        document.getElementById("reveal-info").style.height = "0";
        // document.getElementById("reveal-info").style.display = "none";
        setTimeout(hideMainBodyText, 125);
    }
}

function hideMainBodyText() {
    console.log("works hideMainBodyText");
    if (hidden == false) {
        document.getElementById("main-reveal-h1").style.opacity = "0";
        document.getElementById("main-reveal-h1").style.fontSize = "0";
        document.getElementById("main-reveal-h2").style.opacity = "0";
        document.getElementById("main-reveal-h2").style.fontSize = "0";
        setTimeout(revealInfo, 250);
        // document.getElementById("main-reveal-h1").style.width = "0";
        // document.getElementById("main-reveal-h1").style.height = "0";
    }
}

function revealInfo() {
    // document.getElementById("mainbody").style.width = "0";
    //document.getElementById("mainbody").style.height = "0";
    if (hidden == false) {
        document.getElementById("mainbody").style.display = "none";
        document.getElementById("main-one-info").style.marginLeft = "20vw";
        document.getElementById("main-one-info").style.width = "60vw";
        document.getElementById("main-one-info").style.backgroundColor = "#000000";
        setTimeout(profileInfo, 250);
    }
}

function profileInfo() {
    if (hidden == false) {
        document.getElementById("info-portrait").style.width = "50%";
        document.getElementById("info-portrait").style.opacity = "1";

        hidden = true;
    }
}