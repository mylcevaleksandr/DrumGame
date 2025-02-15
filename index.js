const audioElementCrash = new Audio("sounds/crash.mp3");
const audioElementKB = new Audio("sounds/kick-bass.mp3");
const audioElementSnare = new Audio("sounds/snare.mp3");
const audioElementTOne = new Audio("sounds/tom-1.mp3");
const audioElementTTwo = new Audio("sounds/tom-2.mp3");
const audioElementTThree = new Audio("sounds/tom-3.mp3");
const audioElementTFour = new Audio("sounds/tom-4.mp3");

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", handleClick);
});

document.addEventListener("keydown", (keyDown) => {
    const selectedButton = keyDown.key;
    const activeElement = document.querySelector(`.${selectedButton}`);
    if (activeElement) {
        activeElement.style.color = "green";
        handleEvents(activeElement);
    }
});

function paintButtonRed(audioElement, audioButton) {
    audioElement.addEventListener("ended", () => {
        audioButton.style.color = "midnightblue";
    });
}

function handleClick(e) {
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("drum")) {
        e.target.style.color = "green";
        handleEvents(e.target);
    }
}

function handleEvents(keyOrMouseEvent) {
    const e = keyOrMouseEvent.innerText.toLowerCase() ? keyOrMouseEvent.innerText.toLowerCase() : keyOrMouseEvent.key;
    switch (e) {
        case "a":
            audioElementKB.play();
            paintButtonRed(audioElementKB, keyOrMouseEvent);
            break;
        case "s":
            audioElementSnare.play();
            paintButtonRed(audioElementSnare, keyOrMouseEvent);
            break;
        case "d":
            audioElementTOne.play();
            paintButtonRed(audioElementTOne, keyOrMouseEvent);
            break;
        case "f":
            audioElementCrash.play();
            paintButtonRed(audioElementCrash, keyOrMouseEvent);
            break;
        case "j":
            audioElementTTwo.play();
            paintButtonRed(audioElementTTwo, keyOrMouseEvent);
            break;
        case "k":
            audioElementTThree.play();
            paintButtonRed(audioElementTThree, keyOrMouseEvent);
            break;
        case "l":
            audioElementTFour.play();
            paintButtonRed(audioElementTFour, keyOrMouseEvent);
            break;
        default:
            console.log(this);
    }

}


