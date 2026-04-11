function openMenu() {
    document.body.classList.add('menu--open');
}

function closeMenu() {
    document.body.classList.remove('menu--open');
}

document.getElementById('btn__menu').addEventListener('click', openMenu);
document.getElementById('menu__backdrop--close').addEventListener('click', closeMenu);
