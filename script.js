'use strict';

// Selections
const showBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// with hard code
/*
for (let i = 0; i < showBtn.length; i++) {
  let btnElement = showBtn[i];
  btnElement.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
closeBtn.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

// with functions

// Open function
const openModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Close function
const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open
for (let i = 0; i < showBtn.length; i++) {
  const element = showBtn[i];
  element.addEventListener('click', openModal);
}
// close
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});
