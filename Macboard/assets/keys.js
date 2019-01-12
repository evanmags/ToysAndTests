//variable definitions
//nodelist for keyboard keys
var keyList = document.querySelectorAll("button");
//trackpad
var trackPad = document.getElementById("trackPad");

//event listeners
//keyboard
window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyUnpressed);
//trackpad
window.addEventListener("mouseup", mouseClick);
window.addEventListener("mousedown", mouseClick);

// Function definitions
//keyboard
function keyPressed(){
    for(var i = 0; i < keyList.length; i++){
        if(keyList[i].name === event.key){
            keyList[i].classList.add("pressed");
        };
    };
};

function keyUnpressed(){
    for(var i = 0; i < keyList.length; i++){
        if(keyList[i].name === event.key){
            keyList[i].classList.remove("pressed");
        };
    };
};

//trackpadfsd
function mouseClick(){
    trackPad.classList.toggle("clicked");
};
