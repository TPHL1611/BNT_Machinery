function openNav() {
    const mobileMenu = document.querySelector('.nav-menu');
    mobileMenu.onclick = function() {
        document.querySelector(".nav_content").style.width = '30rem';
        document.querySelector(".nav_content").style.padding = '0 4.8rem';
        document.querySelector(".nav_content").style.left = '1.6rem';
    }
}

function closeNav() {
    const closeMenu = document.querySelector('.nav_content--close')
    closeMenu.onclick = function() {
        document.querySelector(".nav_content").style.width = '0';
        document.querySelector(".nav_content").style.padding = '0';
        document.querySelector(".nav_content").style.left = '-10rem';
    }

}

function start() {
    openNav();
    closeNav();
}
// const navContent = document.querySelector('.nav_content')
// console.log([navContent])