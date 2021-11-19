const begin = document.getElementById('begin');
const targetBegin = document.getElementById('targetBegin');

begin.addEventListener('click', function() {
    targetBegin.classList.add('hidden');
});