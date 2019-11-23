const menu = document.querySelector('.menu-list')
const burgerButton = document.querySelector('#burger-menu')

burgerButton.addEventListener('click', hideShow)

function hideShow(){
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
    }
    else{
        menu.classList.add('show')
    }
}



