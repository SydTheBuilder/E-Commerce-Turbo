const btnMenu = document.getElementById('btn__menu');
const backdrop = document.getElementById('menu__backdrop');
const closeBtn = document.getElementById('menu__backdrop--close');

btnMenu.addEventListener('click', function() {
    backdrop.classList.add('menu__backdrop--open');
});

closeBtn.addEventListener('click', function() {
    backdrop.classList.remove('menu__backdrop--open');
});
