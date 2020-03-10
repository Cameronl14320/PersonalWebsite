var displaying = false;

function upsize(newdisplay) {
    if (newdisplay != null) {
        document.getElementById('content').style.opacity = ".5";
        document.getElementById('revealimg').src = newdisplay;
        document.getElementById('revealdisplay').style.visibility = 'visible';
        document.getElementById('revealdisplay').style.opacity = '1';
        document.getElementById('closeimg').style.visibility = 'visible';
        displaying = true;
    } else {
        console.log("no image found for newdisplay: " + newdisplay)
    }
}

function downsize() {
    if (displaying == true) {
        document.getElementById('closeimg').style.visibility = 'hidden';
        document.getElementById('revealdisplay').style.opacity = '0';
        document.getElementById('revealdisplay').style.visibility = 'hidden';
        document.getElementById('content').style.opacity = "1";
        displaying = false;
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('loading').style.opacity = '0';
        document.getElementById('loading').style.visibility = 'hidden';
    }
};


function createCollection() {
    var data = JSON.parse("./metadata.json");
    for (var i = 0; i < data.length; i++) {
        alert(data[i].image_url);
    }
}