const popcat = document.getElementById('popcat');
const counter = document.getElementById('counter');
const showGIF = document.getElementById('showGIF');
const closeGIF = document.getElementById('closeGIF');
const mode = document.getElementById('mode');
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
    mode.textContent = "POG";
    mode.classList.add('text-red-600');
    mode.classList.remove('text-green-600');
    popSound();
}

function closeMouth() {
    popcat.src = "public/assets/close-mouth.png";
    mode.textContent = "Normal";
    mode.classList.add('text-green-600');
    mode.classList.remove('text-red-600');
}

function popSound() {
    const popsound = new Audio('public/sound/pop-sound.mp3');
    popsound.play();
}