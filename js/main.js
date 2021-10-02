const menu = document.querySelector('.menu'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay');


burger.addEventListener('click', () => {
    menu.classList.add('open');
        overlay.classList.add('open');
        lockScroll()
});

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll()
});
function lockScroll(){
    document.body.classList.add("lock")
}
function unlockScroll(){
    document.body.classList.remove("lock")
}
