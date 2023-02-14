const $favorite = document.querySelector('.favorite')
const $hearth = document.querySelector('#hearth')
const $menu = document.querySelector('#menu')
const $nav = document.querySelector('nav')


$favorite.addEventListener('click', ()=>{
    $hearth.classList.toggle('active')
})

$menu.addEventListener('click',()=>{
    $nav.classList.toggle('active-menu')

    $menu.classList.toggle('fa-bars')
    $menu.classList.toggle('fa-xmark')
})

