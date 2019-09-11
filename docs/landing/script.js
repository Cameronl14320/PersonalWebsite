var hidden = false;

function hideReveal() {
    console.log("works hideReveal");
    if (hidden == false) {
        document.getElementById("reveal-info").style.opacity = "0";
        document.getElementById("reveal-info").style.width = "0";
        document.getElementById("reveal-info").style.height = "0";
        // document.getElementById("reveal-info").style.display = "none";
        setTimeout(hideMainBodyText, 125);
    } else if (hidden == true) {
        document.getElementById("reveal-info").style.opacity = "1";
        document.getElementById("reveal-info").style.width = "5vw";
        document.getElementById("reveal-info").style.height = "5vw";
        hidden = false;
        console.log("should be working here");
    }
}

function hideMainBodyText() {
    console.log("works hideMainBodyText");
    if (hidden == false) {
        document.getElementById("reveal-info").style.display = "none";
        document.getElementById("main-reveal-h1").style.opacity = "0";
        document.getElementById("main-reveal-h1").style.fontSize = "0";
        document.getElementById("main-reveal-h2").style.opacity = "0";
        document.getElementById("main-reveal-h2").style.fontSize = "0";
        setTimeout(revealInfo, 250);
        // document.getElementById("main-reveal-h1").style.width = "0";
        // document.getElementById("main-reveal-h1").style.height = "0";
    } else if (hidden == true) {
        document.getElementById("reveal-info").style.display = "inline-block";
        document.getElementById("main-reveal-h1").style.opacity = "1";
        document.getElementById("main-reveal-h1").style.fontSize = "2vw";
        document.getElementById("main-reveal-h2").style.opacity = "1";
        document.getElementById("main-reveal-h2").style.fontSize = "2vw";
        setTimeout(hideReveal, 250);
    }
}

function revealInfo() {
    // document.getElementById("mainbody").style.width = "0";
    //document.getElementById("mainbody").style.height = "0";
    if (hidden == false) {
        //document.getElementById("mainbody").style.display = "none";
        document.getElementById("main-reveal-h1").style.display = "none";
        document.getElementById("main-reveal-h2").style.display = "none";


        
        document.getElementById("mainbody").style.width= "60vw";
        document.getElementById("mainbody").style.left = "20vw";
        
        document.getElementById("main-one-info").style.marginLeft = "0";
        document.getElementById("main-one-info").style.width = "100%";
        document.getElementById("main-one-info").style.backgroundColor = "#dfdfdf";
        setTimeout(profileInfo, 250);
    } else if (hidden == true) {
        document.getElementById("main-reveal-h1").style.display = "block";
        document.getElementById("main-reveal-h2").style.display = "block";

        document.getElementById("mainbody").style.width= "50vw";
        document.getElementById("mainbody").style.left = "25vw";

        document.getElementById("main-one-info").style.marginLeft = "90vw";
        document.getElementById("main-one-info").style.width = "0";
        document.getElementById("main-one-info").style.backgroundColor = "none";
        setTimeout(hideMainBodyText, 1000);
    }
}

function profileInfo() {
    if (hidden == false) {
        document.getElementById("info-portrait").style.opacity = "1";
        document.getElementById("info-description").style.opacity = "1";
        document.getElementById("info-description").style.fontSize = "20px";
        setTimeout(revealClose, 1200);
    } else if (hidden == true) {
        document.getElementById("info-portrait").style.opacity = "0";
        document.getElementById("info-description").style.opacity = "0";
        document.getElementById("info-description").style.fontSize = "0px";
        setTimeout(revealInfo, 300);

    }
}

function revealClose() {
    if (hidden == false) {
    document.getElementById("info-close").style.opacity = "1";
    document.getElementById("info-close").style.marginLeft = "0";
    hidden = true;
    } else if (hidden == true) {
        document.getElementById("info-close").style.opacity = "0";
        setTimeout(profileInfo, 150);
    }
}