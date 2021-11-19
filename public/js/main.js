const popcat = document.getElementById('popcat');
const counter = document.getElementById('counter');
var i = 1;

popcat.addEventListener('click', function() {
    counter.value = i++;

    const sound = new Audio('public/sound/safensound.mp3');
    if(counter.value >= 1000 && counter.value < 1001) {
        sound.play();
    }
});

function openMouth() {
    popcat.src = "public/assets/open-mouth.png";
    popSound();
}

function closeMouth() {
    popcat.src = "public/assets/close-mouth.png";
}

function popSound() {
    const popsound = new Audio('public/sound/pop-sound.mp3');
    popsound.play();
}