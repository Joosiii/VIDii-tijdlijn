const Gen1 = document.querySelector('article:first-of-type')
const Gen2 = document.querySelector('article:nth-of-type(2)')
const Gen3 = document.querySelector('article:nth-of-type(3)')
const Gen4 = document.querySelector('article:nth-of-type(4)')
const Gen5 = document.querySelector('article:nth-of-type(5)')


function Flashlight(e) {
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', Flashlight)
document.addEventListener('touchmove', Flashlight)

// Bron gebruikt: https://codemyui.com/flashlight-mouse-pointer/


const torch1 = document.querySelector('a:first-of-type img')
torch1.addEventListener('click', function () {
    torch1.src = "images/torch-px.gif"

    Gen1.style.display = 'block'
    document.querySelector('a:nth-of-type(2) img').style.display = 'block'

    Gen2.style.display = 'none'
    Gen3.style.display = 'none'
    Gen4.style.display = 'none'
    Gen5.style.display = 'none'
})

const torch2 = document.querySelector('a:nth-of-type(2) img')
torch2.addEventListener('click', function () {
    torch2.src = "images/torch-px.gif"

    Gen2.style.display = 'block'
    document.querySelector('a:nth-of-type(3) img').style.display = 'block'

    Gen1.style.display = 'none'
    Gen3.style.display = 'none'
    Gen4.style.display = 'none'
    Gen5.style.display = 'none'
})

const torch3 = document.querySelector('a:nth-of-type(3) img')
torch3.addEventListener('click', function () {
    torch3.src = "images/torch-px.gif"

    Gen3.style.display = 'block'
    document.querySelector('a:nth-of-type(4) img').style.display = 'block'

    Gen1.style.display = 'none'
    Gen2.style.display = 'none'
    Gen4.style.display = 'none'
    Gen5.style.display = 'none'
})

const torch4 = document.querySelector('a:nth-of-type(4) img')
torch4.addEventListener('click', function () {
    torch4.src = "images/torch-px.gif"

    Gen4.style.display = 'block'
    document.querySelector('a:nth-of-type(5) img').style.display = 'block'

    Gen1.style.display = 'none'
    Gen2.style.display = 'none'
    Gen3.style.display = 'none'
    Gen5.style.display = 'none'
})

const torch5 = document.querySelector('a:nth-of-type(5) img')
torch5.addEventListener('click', function () {
    torch5.src = "images/torch-px.gif"

    Gen5.style.display = 'block'

    Gen1.style.display = 'none'
    Gen2.style.display = 'none'
    Gen3.style.display = 'none'
    Gen4.style.display = 'none'
})