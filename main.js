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

function openMenu() {
    const menuProducts = document.querySelectorAll(".product-details__menu--item")
    const descProducts = document.querySelectorAll(".product-details__wrap")

    menuProducts.forEach(function(menuProduct, index) {
        const descProduct = descProducts[index]

        menuProduct.onclick = function() {

            console.log(this);
            document.querySelector(".product-details__menu--item.active").classList.remove('active');
            document.querySelector(".product-details__wrap.active").classList.remove('active');
            
            this.classList.add('active');
            descProduct.classList.add('active');
        }
    })
}

function start() {
    openNav();
    closeNav();
    openMenu();
}
// const navContent = document.querySelector('.nav_content')
// console.log([navContent])