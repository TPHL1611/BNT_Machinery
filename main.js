function openNav() {
    const mobileMenu = document.querySelector('.nav__item-menu');
    mobileMenu.onclick = function() {
        document.querySelector('.overlay').style.width ='200%';
        document.querySelector('.overlay').style.height ='200%';

        document.querySelector(".menu-mobile").style.width = '30rem';
        document.querySelector(".menu-mobile").style.padding = '0 4.8rem';
        document.querySelector(".menu-mobile").style.left = '-6%';
    }
}

function closeNav() {
    const closeMenu = document.querySelector('.overlay')
    closeMenu.onclick = function() {
        document.querySelector('.overlay').style.width ='0';
        document.querySelector(".menu-mobile").style.width = '0';
        document.querySelector(".menu-mobile").style.left = '-65%';
    }

}

function start() {
    openNav();
    closeNav();
}