const q = element => document.querySelector(element)
const qAll = elements => document.querySelectorAll(elements)


/* Menu toggle */

function menuToggle(event) {
    q('ul').classList.toggle('open')
    q('.menu-toggle').style.display = 'none'
}

q('.menu-toggle').addEventListener('click', menuToggle)


