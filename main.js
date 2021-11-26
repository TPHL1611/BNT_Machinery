function openNav() {
    const mobileMenu = document.querySelector('.nav-menu');
    mobileMenu.onclick = function() {
        document.querySelector(".nav_content").style.width = '30rem';
        document.querySelector(".nav_content").style.left = '0';
    }
}

function closeNav() {
    const main = document.getElementById('main');
    main.onclick = function() {
        document.querySelector(".nav_content").style.width = '0';
        document.querySelector(".nav_content").style.left = '-10rem';
        console.log(this)
    }
}

function start() {
    openNav();
    closeNav();
}