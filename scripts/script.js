const Gen1 = document.querySelector('article:first-of-type')
const Gen2 = document.querySelector('article:nth-of-type(2)')
const Gen3 = document.querySelector('article:nth-of-type(3)')
const Gen4 = document.querySelector('article:nth-of-type(4)')
const Gen5 = document.querySelector('article:nth-of-type(5)')

const Torch1 = document.querySelector('a:first-of-type img')
const Torch2 = document.querySelector('a:nth-of-type(2) img')
const Torch3 = document.querySelector('a:nth-of-type(3) img')
const Torch4 = document.querySelector('a:nth-of-type(4) img')
const Torch5 = document.querySelector('a:nth-of-type(5) img')

const Button1 = document.querySelector('ul li:nth-of-type(1) button')
const Button2 = document.querySelector('ul li:nth-of-type(2) button')
const Button3 = document.querySelector('ul li:nth-of-type(3) button')
const Button4 = document.querySelector('ul li:nth-of-type(4) button')
const Button5 = document.querySelector('ul li:nth-of-type(5) button')


function Flashlight(e) {
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', Flashlight)
document.addEventListener('touchmove', Flashlight)

// Bron gebruikt: https://codemyui.com/flashlight-mouse-pointer/

Button1.disabled = true;
Button2.disabled = true;
Button3.disabled = true;
Button4.disabled = true;
Button5.disabled = true;

Torch1.addEventListener('click', Section1)
Torch2.addEventListener('click', Section2)
Torch3.addEventListener('click', Section3)
Torch4.addEventListener('click', Section4)
Torch5.addEventListener('click', Section5)

Button1.addEventListener('click', Section1)
Button2.addEventListener('click', Section2)
Button3.addEventListener('click', Section3)
Button4.addEventListener('click', Section4)
Button5.addEventListener('click', Section5)


function Section1() {
    Torch1.src = "images/torch-px.gif"

    Gen1.classList.add('show')
    Gen1.classList.remove('hide')
    Torch2.classList.add('show')
    Button1.disabled = false;

    Torch1.classList.add('visible')
    Torch2.classList.remove('visible')
    Torch3.classList.remove('visible')
    Torch4.classList.remove('visible')
    Torch5.classList.remove('visible')

    Gen2.classList.add('hide')
    Gen3.classList.add('hide')
    Gen4.classList.add('hide')
    Gen5.classList.add('hide')

    Button1.classList.add('active')
    Button2.classList.remove('active')
    Button3.classList.remove('active')
    Button4.classList.remove('active')
    Button5.classList.remove('active')
}


function Section2() {
    Torch2.src = "images/torch-px.gif"

    Gen2.classList.add('show')
    Gen2.classList.remove('hide')
    Torch3.classList.add('show')
    Button2.disabled = false;

    Torch2.classList.add('visible')
    Torch1.classList.remove('visible')
    Torch3.classList.remove('visible')
    Torch4.classList.remove('visible')
    Torch5.classList.remove('visible')

    Gen1.classList.add('hide')
    Gen3.classList.add('hide')
    Gen4.classList.add('hide')
    Gen5.classList.add('hide')

    Button2.classList.add('active')
    Button1.classList.remove('active')
    Button3.classList.remove('active')
    Button4.classList.remove('active')
    Button5.classList.remove('active')
}


function Section3() {
    Torch3.src = "images/torch-px.gif"

    Gen3.classList.add('show')
    Gen3.classList.remove('hide')
    Torch4.classList.add('show')
    Button3.disabled = false;

    Torch3.classList.add('visible')
    Torch1.classList.remove('visible')
    Torch2.classList.remove('visible')
    Torch4.classList.remove('visible')
    Torch5.classList.remove('visible')

    Gen1.classList.add('hide')
    Gen2.classList.add('hide')
    Gen4.classList.add('hide')
    Gen5.classList.add('hide')

    Button3.classList.add('active')
    Button1.classList.remove('active')
    Button2.classList.remove('active')
    Button4.classList.remove('active')
    Button5.classList.remove('active')
}


function Section4() {
    Torch4.src = "images/torch-px.gif"

    Gen4.classList.add('show')
    Gen4.classList.remove('hide')
    Torch5.classList.add('show')
    Button4.disabled = false;

    Torch4.classList.add('visible')
    Torch1.classList.remove('visible')
    Torch2.classList.remove('visible')
    Torch3.classList.remove('visible')
    Torch5.classList.remove('visible')

    Gen1.classList.add('hide')
    Gen2.classList.add('hide')
    Gen3.classList.add('hide')
    Gen5.classList.add('hide')

    Button4.classList.add('active')
    Button1.classList.remove('active')
    Button2.classList.remove('active')
    Button3.classList.remove('active')
    Button5.classList.remove('active')
}


function Section5() {
    Torch5.src = "images/torch-px.gif"

    Gen5.classList.add('show')
    Gen5.classList.remove('hide')
    Button5.disabled = false;

    Torch5.classList.add('visible')
    Torch1.classList.remove('visible')
    Torch2.classList.remove('visible')
    Torch3.classList.remove('visible')
    Torch4.classList.remove('visible')

    Gen1.classList.add('hide')
    Gen2.classList.add('hide')
    Gen3.classList.add('hide')
    Gen4.classList.add('hide')

    Button5.classList.add('active')
    Button1.classList.remove('active')
    Button2.classList.remove('active')
    Button3.classList.remove('active')
    Button4.classList.remove('active')
}