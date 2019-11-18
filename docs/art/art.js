function upsize(newdisplay) {
    if (newdisplay != null) {
        document.getElementById('content').style.opacity = ".5";
        document.getElementById('revealimg').src = newdisplay;
        document.getElementById('revealdisplay').style.visibility = 'visible';
        document.getElementById('revealdisplay').style.opacity = '1';
    } else {
        console.log("no image found for newdisplay: " + newdisplay)
    }
}

function downsize() {
    document.getElementById('revealdisplay').style.opacity = '0';
    document.getElementById('revealdisplay').style.visibility = 'hidden';
    document.getElementById('content').style.opacity = "1";
    console.log("invalid");
}