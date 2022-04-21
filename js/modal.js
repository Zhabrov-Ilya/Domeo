'use strict';

const modal = document.querySelector('.modal');
const blurContainer = document.querySelector('#blur-container');
const closeBtn = document.querySelector('.modal__cross');
const openBtns = document.querySelectorAll('.call-button, .call-button_img');

function openModal() {
  modal.classList.remove('hidden', 'animate__bounceOut');
  modal.classList.add('animate__animated', 'animate__bounceIn');
  blurContainer.classList.remove('no-blur');
  blurContainer.classList.add('blur', 'disabled');
}

openBtns.forEach(e => {
  e.addEventListener('click', openModal)
});


closeBtn.addEventListener('click', function () {
  modal.classList.remove('animate__bounceIn');
  modal.classList.add('animate__bounceOut');
  blurContainer.classList.add('no-blur');
  modal.addEventListener('animationend', () => {
    modal.classList.add('hidden');
    blurContainer.classList.remove('blur', 'disabled');
  }, {once: true});
});