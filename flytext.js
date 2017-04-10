var textArray = new Array();


//var texts={text1: "text1", text2: "text2"}; 

//setTimeout(secondText, 500);

var toUpdateText;

window.onload = function() {

    var newText1 = new newText("Please input you text.", 100);
    //alert(newText1.text);
    textArray.push(newText1);

    var button = document.getElementById("addText");
    button.onclick = addText;

    var video = document.getElementById("demoVideo");
//    alert(video.width);
     
    if (video.canPlayType("video/mp4") != "") {
		video.src = "areyoupopular.mp4";
	} 
	else if (video.canPlayType("video/ogg") != "") {
		video.src = "areyoupopular.ogv";
	}
	else if (video.canPlayType("video/webm") != "") {
		video.src = "areyoupopular.webm";
	}
    video.load();
    video.addEventListener("pause", stopFly, false);
    video.addEventListener("play", startFly, false);
    video.play();

//    toUpdateText = setInterval(updateText, 100);

}


function updateText()
{
    var textCanvas = document.getElementById("textDisp");
    var textCanvas2d = textCanvas.getContext("2d");

    textCanvas2d.clearRect(0,0, textCanvas.width, textCanvas.height);
//    textCanvas2d.fillStyle="red";
//    textCanvas2d.fillRect(20,20,75,50);

    var textIndex = 0;
    for( textIndex = 0; textIndex < textArray.length; textIndex++ ) {
        text2Disp = textArray[textIndex];
        textCanvas2d.fillStyle="white";
        textCanvas2d.font="20px sans-serif";
    //    textCanvas2d.fillText("This is a text", 100, 100, 480);
    //    textCanvas2d.fillText(texts["text1"], 100, 100, 480);
        textCanvas2d.fillText(text2Disp.text, text2Disp.left, text2Disp.top, 480);

        text2Disp.left = text2Disp.left-5;
    }

    deleteText();
    
    toUpdateText =setTimeout(updateText, 100);
}

function newText(textIn, topValue) {
    this.text = textIn;
    this.top = topValue;
    this.left = 720;
}

function secondText() {
    var newText1 = new newText("This is a test.", 200);
    textArray.push(newText1);
}

function deleteText() {
    text2Check = textArray[0];
    if( text2Check.left < -120 ) {
        textArray.shift();
    }
}

function addText() {
    var textInput = document.getElementById("textIn");
    var textValue = textInput.value;
//    alert(textValue);
    if(textValue != "") {
        var topValue = Math.random()*440+5;
        var newText1 = new newText(textValue, topValue);
        textArray.push(newText1);
    }
    textInput.value = "";
}

function stopFly() {
//    alert("stopping");
//         clearInterval(toUpdateText);
       clearTimeout(toUpdateText);
//    alert("clearing");
}

function startFly() {
//        toUpdateText = setInterval(updateText, 100);
    toUpdateText = setTimeout(updateText, 100);
}
