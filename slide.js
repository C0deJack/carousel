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

var currentPicture = 1;

// var foo = setInterval(function() {
//     changeCurrentPictureUp();
//     }, 5000);
//
// var boo = setInterval(function() {
//     changeCurrentPictureDown();
// }, 5000);

rightButton.addEventListener('click', function() {
    changeCurrentPictureUp()
    clearInterval(foo)
    foo = setInterval(function() {
        changeCurrentPictureUp();
        }, 5000);
});

leftButton.addEventListener('click', function() {
    changeCurrentPictureDown()
    clearInterval(boo)
   boo = setInterval(function() {
        changeCurrentPictureDown();
    }, 5000);
});

function changeCurrentPictureUp() {
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
            currentPicture = 2;
            break;
        case 2:
            picTwo.classList.add("slideOutRight");
            picThree.classList.add("slideInRight");
            textThree.classList.add("textVisible");
            currentPicture = 3;
            break;
        case 3:
            picThree.classList.add("slideOutRight");
            picFour.classList.add("slideInRight");
            textFour.classList.add("textVisible");
            currentPicture = 4;
            break;
        case 4:
            picFour.classList.add("slideOutRight");
            picOne.classList.add("slideInRight");
            textOne.classList.add("textVisible");
            currentPicture = 1;
            break;
    }
}

function changeCurrentPictureDown() {
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
            picOne.classList.add("slideOutLeft");
            picFour.classList.add("slideInLeft");
            textFour.classList.add("textVisible");
            currentPicture = 4;
            break;
        case 4:
            picFour.classList.add("slideOutLeft");
            picThree.classList.add("slideInLeft");
            textThree.classList.add("textVisible");
            currentPicture = 3;
            break;
        case 3:
            picThree.classList.add("slideOutLeft");
            picTwo.classList.add("slideInLeft");
            textTwo.classList.add("textVisible");
            currentPicture = 2;
            break;
        case 2:
            picTwo.classList.add("slideOutLeft");
            picOne.classList.add("slideInLeft");
            textOne.classList.add("textVisible");
            currentPicture = 1;
            break;
    }
}


