var rightButton = document.getElementById('buttonRight');
var leftButton = document.getElementById('buttonLeft');
var picOne = document.getElementById('img1');
var picTwo = document.getElementById('img2');
var picThree = document.getElementById('img3');
var picFour = document.getElementById('img4');
var textOne = document.getElementById('text1');
var textTwo = document.getElementById('text2');
var textThree = document.getElementById('text3');
var textFour = document.getElementById('text4');

var currentPicture = 4;

//var sliding = null;

//window.onload = startSlide;

// function startSlide() {
//     if (!sliding) {
//         sliding = setInterval(changeCurrentPictureUp, 3000);
//     }
// }
//
// function pauseSlide() {
//     if (sliding) {
//         clearInterval(sliding);
//         sliding = null;
//         setTimeout(changeCurrentPictureUp, 6000 );
//     }
// }

//setInterval(function(){ changeCurrentPictureUp(); }, 5000);

rightButton.addEventListener('click', changeCurrentPictureUp);
leftButton.addEventListener('click', changeCurrentPictureDown);
//rightButton.addEventListener('click',  pauseSlide);
//leftButton.addEventListener('click', pauseSlide);

function displayCurrentPicture() {
    picOne.classList.remove("slideInLeft", "slideOutLeft", "slideInRight", "slideOutRight");
    picTwo.classList.remove("slideInLeft", "slideOutLeft", "slideInRight", "slideOutRight");
    picThree.classList.remove("slideInLeft", "slideOutLeft", "slideInRight", "slideOutRight");
    picFour.classList.remove("slideInLeft", "slideOutLeft", "slideInRight", "slideOutRight");
    textOne.classList.remove("textVisible");
    textTwo.classList.remove("textVisible");
    textThree.classList.remove("textVisible");
    textFour.classList.remove("textVisible");
    switch (currentPicture) {
        case 1:
            picOne.classList.add("slideOutRight");
            picTwo.classList.add("slideInRight");
            textTwo.classList.add("textVisible");
            break;
        case 2:
            picTwo.classList.add("slideOutRight");
            picThree.classList.add("slideInRight");
            textThree.classList.add("textVisible");
            break;
        case 3:
            picThree.classList.add("slideOutRight");
            picFour.classList.add("slideInRight");
            textFour.classList.add("textVisible");
            break;
        case 4:
            picFour.classList.add("slideOutRight");
            picOne.classList.add("slideInRight");
            textOne.classList.add("textVisible");
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

