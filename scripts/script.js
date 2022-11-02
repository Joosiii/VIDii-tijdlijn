function Flashlight(e) {
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', Flashlight)
document.addEventListener('touchmove', Flashlight)

// Bron gebruikt: https://codemyui.com/flashlight-mouse-pointer/



const torch1 = document.querySelector('.gen1 img')
torch1.addEventListener('click', function () {
    document.querySelector('.gen1 img').src = "images/torch-px.gif"

    document.querySelector('.gen1 section').style.display = 'block'
    document.querySelector('.gen1 div').style.display = 'block'
    document.querySelector('.gen2 img').style.display = 'block'
})