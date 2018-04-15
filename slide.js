var rightButton = document.getElementById('buttonRight')
var leftButton = document.getElementById('buttonLeft')
var picOne = document.getElementById('one')
var picTwo = document.getElementById('two')
var picThree = document.getElementById('three')
var picFour = document.getElementById('four')

var currentPicture = 1;

setInterval(function(){ changeCurrentPictureUp(); }, 5000);

rightButton.addEventListener('click', changeCurrentPictureUp);
leftButton.addEventListener('click', changeCurrentPictureDown);

function displayCurrentPicture() {
    picOne.classList.remove("visible");
    picTwo.classList.remove("visible");
    picThree.classList.remove("visible");
    picFour.classList.remove("visible");
    switch (currentPicture) {
        case 1:
            picOne.classList.add("visible");
            break;
        case 2:
            picTwo.classList.add("visible");
            break;
        case 3:
            picThree.classList.add("visible");
            break;
        case 4:
            picFour.classList.add("visible");
            break;
    }
}

function changeCurrentPictureUp() {
    switch (currentPicture) {
        case 1:
            currentPicture = 2;
            break;
        case 2:
            currentPicture = 3;
            break;
        case 3:
            currentPicture = 4;
            break;
        case 4:
            currentPicture = 1;
            break;
    }
    displayCurrentPicture()
}

function changeCurrentPictureDown() {
    switch (currentPicture) {
        case 1:
            currentPicture = 4;
            break;
        case 2:
            currentPicture = 1;
            break;
        case 3:
            currentPicture = 2;
            break;
        case 4:
            currentPicture = 3;
            break;
    }
    displayCurrentPicture()
}

