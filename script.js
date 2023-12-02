let openMenu = document.querySelector('.burger-menu-open');

let closeMenu = document.querySelector('.cancel-menu');

let burgerMenu = document.querySelector('.burger-menu');

function openDiv() {
    burgerMenu.classList.remove('hide')
}

function closeDiv() {
    burgerMenu.classList.add('hide')
}