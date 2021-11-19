const popcat = document.getElementById('popcat');
const counter = document.getElementById('counter');
const showGIF = document.getElementById('showGIF');
const closeGIF = document.getElementById('closeGIF');
var i = 1;

popcat.addEventListener('click', function() {
    counter.value = i++;

    const sound = new Audio('public/sound/safensound.mp3');
    if(counter.value >= 500 && counter.value < 501) {
        showGIF.classList.remove('hidden');
        sound.play();
    }
});

closeGIF.addEventListener('click', function() {
    showGIF.classList.add('hidden');
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