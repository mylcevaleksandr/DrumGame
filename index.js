const audioElements = {
    "a": new Audio("sounds/kick-bass.mp3"),
    "s": new Audio("sounds/snare.mp3"),
    "d": new Audio("sounds/tom-1.mp3"),
    "f": new Audio("sounds/crash.mp3"),
    "j": new Audio("sounds/tom-2.mp3"),
    "k": new Audio("sounds/tom-3.mp3"),
    "l": new Audio("sounds/tom-4.mp3"),
};


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", handleEvent);
    document.addEventListener("keydown", handleEvent);
});

function handleEvent(e) {
    if (e.type === "click" && e.target.tagName === "BUTTON" && e.target.classList.contains("drum")) {
        makeSound(e.target, e.target.innerText.toLowerCase());
    } else if (e.type === "keydown") {
        const key = e.key.toLowerCase();
        if (key && audioElements[key]) {
            const button = document.querySelector(`.${key}`);
            if (button) {
                makeSound(button, key);
            }
        }
    }
}


function makeSound(button, key) {
    const audioElement = audioElements[key];
    if (audioElement) {
        button.classList.add("pressed");
        audioElement.play();
        audioElement.addEventListener("ended", () => {
            button.classList.remove("pressed");
        });
    }
}


