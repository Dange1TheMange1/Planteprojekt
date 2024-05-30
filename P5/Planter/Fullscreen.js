const BUTTON = document.querySelector('button')
const DIV = document.querySelector('div')

const toggleFullscreen = () => {
   DIV.requestFullscreen()
}

BUTTON.addEventListener('click', toggleFullscreen)