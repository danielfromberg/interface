const audio = document.querySelector('#audio')
const test = document.querySelector('h1')

function moveAudio () {
    audio.style.top = Math.random() * innerHeight + 'px'
    audio.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
    setTimeout(moveAudio, 5000)
}

audio.addEventListener('mouseover', moveAudio)


function changeBackground() {
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

window.addEventListener('mouseover', changeBackground)
