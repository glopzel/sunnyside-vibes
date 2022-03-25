const burger = document.querySelector('.burger');
const navUl = document.querySelector('#navUl');
const nav = document.querySelector('nav');
const logo = document.querySelector('#logo');
const header = document.querySelector('h1');
const arrow = document.querySelector('#arrow')

burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    nav.classList.toggle('seeNav');
    logo.classList.toggle('hideLogo');
    header.classList.toggle('hideLogo');
    arrow.classList.toggle('hideLogo');
})