// Alle nodige elementen worden uit de HTML gehaald en gedeclareerd

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

const ButtonStart = document.querySelector('body > section button')

const TipIcon = document.querySelector('body > span > img')
const TipText = document.querySelector('body > span > p')

// Alle benodigde geluiden worden gedeclareerd en het volume wordt bepaald

const TorchSound = new Audio("sounds/TorchSound.mp3")
TorchSound.volume = 0.2
const SectionSound = new Audio("sounds/SectionSound.mp3")
TorchSound.volume = 0.2
const GastlySound = new Audio("sounds/GastlySound.mp3")
GastlySound.volume = 0.1
const GengarSound = new Audio("sounds/gengar.mp3")
GengarSound.volume = 0.4
const CompleteSound = new Audio("sounds/complete.mp3")
CompleteSound.volume = 0.1

// Bron gebruikt: https://css-tricks.com/play-sound-on-hover/

// De flashlight functie wordt geïmplementeerd, op basis van de positie van de muis verschijnt er een transparante
// radial gradient in de in CSS gemaakte overlay

function Flashlight(e) {
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', Flashlight)
document.addEventListener('touchmove', Flashlight)

// Bron gebruikt: https://codemyui.com/flashlight-mouse-pointer/

// De buttons in de sidemenu worden disabled (default)

Button1.disabled = true;
Button2.disabled = true;
Button3.disabled = true;
Button4.disabled = true;
Button5.disabled = true;

// De EventListeners worden aangemaakt voor wanneer er op de buttons of torches geklikt wordt

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

// Elke section heeft zijn eigen functie, deze wordt uitgevoerd wanneer de corresponderende torch/button geklikt wordt

function Section1() {
    // Ten eerste worden er twee geluiden afgespeeld, eerst een geluid dat de torch aan gaat en vervolgens, met een delay
    // het geluid van de in beeld komende section
    TorchSound.play()
    setTimeout(function () {
        SectionSound.play()
    }, 700)

    // Vervolgens moet de section zichtbaar worden door middel van een class, moet de volgende torch verschijnen en moet de button
    // werkend worden
    Gen1.classList.add('show')
    Gen1.classList.remove('hide')
    Torch2.classList.add('show')
    Button1.disabled = false

    // Door de afbeelding te vervangen gaat de torch aan
    Torch1.src = "images/torch-used-px.png"

    // De tip wordt aangepast
    TipText.innerHTML = "Seach for the 2nd torch!"

    // Vervolgens moeten alle andere sections uit gaan, mocht de gebruiker vanuit een andere section op deze hebben geklikt
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

// Zie Section 1

function Section2() {
    TorchSound.play()
    setTimeout(function () {
        SectionSound.play()
    }, 700)

    Gen2.classList.add('show')
    Gen2.classList.remove('hide')
    Torch3.classList.add('show')
    Button2.disabled = false

    Torch2.src = "images/torch-used-px.png"

    TipText.innerHTML = "Seach for the 3rd torch!"

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

// Zie Section 1

function Section3() {
    TorchSound.play()
    setTimeout(function () {
        SectionSound.play()
    }, 700)

    Gen3.classList.add('show')
    Gen3.classList.remove('hide')
    Torch4.classList.add('show')
    Button3.disabled = false

    Torch3.src = "images/torch-used-px.png"

    TipText.innerHTML = "Seach for the 4th torch!"

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

// Zie Section 1

function Section4() {
    TorchSound.play()
    setTimeout(function () {
        SectionSound.play()
    }, 700)

    Gen4.classList.add('show')
    Gen4.classList.remove('hide')
    Torch5.classList.add('show')
    Button4.disabled = false

    Torch4.src = "images/torch-used-px.png"

    TipText.innerHTML = "Seach for the 5th torch!"

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

// Zie Section 1

function Section5() {
    TorchSound.play()
    setTimeout(function () {
        SectionSound.play()
    }, 700)

    Gen5.classList.add('show')
    Gen5.classList.remove('hide')
    Button5.disabled = false

    Torch5.src = "images/torch-used-px.png"

    TipText.innerHTML = "You've found all torches!"
    TipIcon.src = "images/winicon.png"

    setTimeout(function () {
        CompleteSound.play()
    }, 1200)

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

// Er wordt een array aangemaakt met objects voor de mogelijke posities van de verschillende torches, deze posities worden
// gerandomized binnen een bepaald kader

let Positioning = [{
        "top": (Math.round(Math.random() * 25)),
        "left": (Math.round(Math.random() * 5)),
        "sectiontop": 10,
        "blur1": 25,
        "blur2": 25
    },
    {
        "top": ((Math.round(Math.random() * 25)) + 50),
        "left": (Math.round(Math.random() * 5)),
        "sectiontop": 50,
        "blur1": 25,
        "blur2": 75
    },
    {
        "top": ((Math.round(Math.random() * 30)) + 25),
        "left": ((Math.round(Math.random() * 5)) + 30),
        "sectiontop": 30,
        "blur1": 55,
        "blur2": 50
    },
    {
        "top": (Math.round(Math.random() * 25)),
        "left": ((Math.round(Math.random() * 5)) + 80),
        "sectiontop": 10,
        "blur1": 75,
        "blur2": 25
    },
    {
        "top": ((Math.round(Math.random() * 25)) + 50),
        "left": ((Math.round(Math.random() * 5)) + 80),
        "sectiontop": 50,
        "blur1": 75,
        "blur2": 75
    }
]

// Elke section krijgt door middel van een function een eigen positie

function Section1Position() {
    // Uit de array wordt random 1 van de 5 objects gekozen en vervolgens uit array verwijderd, de data uit de object wordt
    // doorgestuurd in de vorm van CSS variabelen
    const rdmNumber1 = Math.floor(Math.random() * Positioning.length)
    const Position = Positioning[rdmNumber1]
    Positioning.splice(rdmNumber1, 1)
    document.documentElement.style.setProperty('--section-one-top', Position.top + "vh")
    document.documentElement.style.setProperty('--section-one-left', Position.left + "vw")
    document.documentElement.style.setProperty('--section-one-placement', Position.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-one-blur', Position.blur1 + "% " + Position.blur2 + "%")

    // Op basis van de positie van de torch wordt de section óf links óf rechts hiervan geplaatst
    if (Position.left > 70) {
        document.documentElement.style.setProperty('--section-one-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-one-side', 12 + "vw")
    }

    console.log(Position)
    console.log(Position.top)
    console.log(Position.left)
}

// Zie Section 1 Position

function Section2Position() {
    const rdmNumber2 = Math.floor(Math.random() * Positioning.length)
    const Position2 = Positioning[rdmNumber2]
    Positioning.splice(rdmNumber2, 1)
    document.documentElement.style.setProperty('--section-two-top', Position2.top + "vh")
    document.documentElement.style.setProperty('--section-two-left', Position2.left + "vw")
    document.documentElement.style.setProperty('--section-two-placement', Position2.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-two-blur', Position2.blur1 + "% " + Position2.blur2 + "%")

    if (Position2.left > 70) {
        document.documentElement.style.setProperty('--section-two-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-two-side', 12 + "vw")
    }

    console.log(Position2)
    console.log(Position2.top)
    console.log(Position2.left)
}

// Zie Section 1 Position

function Section3Position() {
    const rdmNumber3 = Math.floor(Math.random() * Positioning.length)
    const Position3 = Positioning[rdmNumber3]
    Positioning.splice(rdmNumber3, 1)
    document.documentElement.style.setProperty('--section-three-top', Position3.top + "vh")
    document.documentElement.style.setProperty('--section-three-left', Position3.left + "vw")
    document.documentElement.style.setProperty('--section-three-placement', Position3.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-three-blur', Position3.blur1 + "% " + Position3.blur2 + "%")

    if (Position3.left > 70) {
        document.documentElement.style.setProperty('--section-three-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-three-side', 12 + "vw")
    }

    console.log(Position3)
    console.log(Position3.top)
    console.log(Position3.left)
}

// Zie Section 1 Position

function Section4Position() {
    const rdmNumber4 = Math.floor(Math.random() * Positioning.length)
    const Position4 = Positioning[rdmNumber4]
    Positioning.splice(rdmNumber4, 1)
    document.documentElement.style.setProperty('--section-four-top', Position4.top + "vh")
    document.documentElement.style.setProperty('--section-four-left', Position4.left + "vw")
    document.documentElement.style.setProperty('--section-four-placement', Position4.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-four-blur', Position4.blur1 + "% " + Position4.blur2 + "%")

    if (Position4.left > 70) {
        document.documentElement.style.setProperty('--section-four-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-four-side', 12 + "vw")
    }

    console.log(Position4)
    console.log(Position4.top)
    console.log(Position4.left)
}

// Zie Section 1 Position

function Section5Position() {
    const rdmNumber5 = Math.floor(Math.random() * Positioning.length)
    const Position5 = Positioning[rdmNumber5]
    Positioning.splice(rdmNumber5, 1)
    document.documentElement.style.setProperty('--section-five-top', Position5.top + "vh")
    document.documentElement.style.setProperty('--section-five-left', Position5.left + "vw")
    document.documentElement.style.setProperty('--section-five-placement', Position5.sectiontop + "vh")
    document.documentElement.style.setProperty('--section-five-blur', Position5.blur1 + "% " + Position5.blur2 + "%")

    if (Position5.left > 70) {
        document.documentElement.style.setProperty('--section-five-side', -17 + "vw")
    } else {
        document.documentElement.style.setProperty('--section-five-side', 12 + "vw")
    }

    console.log(Position5)
    console.log(Position5.top)
    console.log(Position5.left)
}

// Alle functies worden uitgevoerd, waarmee dus de torches en sections geplaatst worden op een randomized positie

Section1Position()
Section2Position()
Section3Position()
Section4Position()
Section5Position()

// Bij klikken op de start button verdwijnt het startscherm en wordt er een sound afgespeeld

ButtonStart.addEventListener('click', Start)

function Start() {
    const StartScreen = document.querySelector('body > section')
    StartScreen.classList.add('fade')

    setTimeout(function () {
        StartScreen.classList.add('hide')
    }, 300)
    GengarSound.play()
}