var rightButton = document.getElementById('buttonRight')

rightButton.addEventListener('click', slide);

function slide() {
    console.log(changeCurrentPicture())
}

var currentPicture = 1;

function changeCurrentPicture() {
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
    return currentPicture
}