let menu = document.querySelector('.menu')
let bars = document.querySelector('.bars')
let body = document.querySelector('body')
let menu_x = document.querySelector('.menu-x')
let qatlam = document.querySelector('.qatlam')
let local = document.querySelector('.local')
let local_x = document.querySelector('.local-x')
let localCH = document.querySelector('.local-link')
bars.addEventListener('click', chiqar)
menu_x.addEventListener('click', qaytar) 
local_x.addEventListener('click', qaytar2) 
localCH.addEventListener('click', chiqar2)


function chiqar() {
    menu.style = 'display:flex;'
}
function qaytar() {
    menu.style = 'display: none;'
}
function qaytar2() {
    local.style = 'display: none;'
}
function chiqar2() {
    local.style = 'display: flex;'
}
