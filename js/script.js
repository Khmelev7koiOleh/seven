const wrapper = document.querySelector('.wrapper');
const topNav = document.querySelector('.top__nav');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const country = document.querySelector('.header__contries');
const counrtyItem = document.querySelector('.header__item-contry');
const lBlockOne = document.querySelector('.l__block-one');
const lBlockTwo = document.querySelector('.l__block-two');
const ua = document.querySelector('.ua');
const en = document.querySelector('.en');
const u = document.querySelector('.u');
const e = document.querySelector('.e');
function tN() {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 1024) {
		topNav.classList.add('add')
		burgerMenu.classList.remove('die')
		wrapper.classList.remove('display__none')
		burgerf();
		console.log('add add')
	} else {
		topNav.classList.remove('add')
		burgerf();
		console.log('remove add')
	}
}
tN();
function scrollt() {
	if (window.pageYOffset > 0) {
		topNav.classList.add('background');
	}
}

function scrollr() {
	if (window.pageYOffset < 1) {
		topNav.classList.toggle('opacity');
		setTimeout(scrollrO, 500);
	}
}

function scrollrO() {
	topNav.classList.remove('opacity');
	topNav.classList.remove('background');
}

function burgerf() {
	if (topNav.classList.contains('add')) {
		burger.classList.add('der')
		console.log('add der')
	} else {
		burger.classList.remove('der')
		burgerMenu.classList.remove('active');
		console.log('remove der ')
	}
}
function burgerMenuf(event) {
	if (event.target.closest('.burger')) {
		burgerMenu.classList.toggle('die')
		console.log('toggle die')
		wrapper.classList.toggle('display__none')
		return animation();
	} else if (!burger.classList.contains('der')) {
		burgerMenu.classList.remove('die');
	}
}
function animation(event) {
	if (event.target.closest('.burger')) {
		burgerMenu.classList.toggle('active')
		console.log('smth add')
	}
}

function language(event) {
	if (event.target.closest('.ua')) {
		ua.classList.toggle('up')
		en.classList.toggle('glish')
		country.classList.toggle('bg')
	}
}
function swap(event) {
	if (event.target.closest('.en')) {
		en.classList.toggle('bgd')
		lBlockOne.classList.add('mir')
		lBlockTwo.classList.add('mir')
	}
}
function swapback(event) {
	if (event.target.closest('.u')) {
		en.classList.toggle('bgd')
		lBlockOne.classList.remove('mir')
		lBlockTwo.classList.remove('mir')
	}
}
function pop(event) {
	if (event.target.closest('.e')) {
		e.classList.toggle('up')
		u.classList.toggle('remove')
	}
}
function out(event) {
	if (event.target.closest('.body')) {
		en.classList.remove('glish')
	}
}
document.addEventListener('click', out);
document.addEventListener('click', pop);
document.addEventListener('click', swapback);
document.addEventListener('click', swap);
document.addEventListener('click', animation);
document.addEventListener('click', language);
document.addEventListener('click', burgerMenuf);
window.addEventListener('resize', tN);
window.addEventListener('resize', burgerMenuf);
window.addEventListener('scroll', scrollt);
window.addEventListener('scroll', scrollr);
language();
tN();
// my