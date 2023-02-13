const $favorite = document.querySelector('.favorite')
const $hearth = document.querySelector('#hearth')

$favorite.addEventListener('click', ()=>{
    $hearth.classList.toggle('active')
})