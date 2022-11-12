'use strict';

const readAllBtn = document.querySelector('.read-all');
const notifications = document.querySelectorAll('.notification');
const counter = document.querySelector('.notification-counter');

let count = 0;

notifications.forEach(notification => {
  notification.addEventListener('click', function () {
    notification.classList.toggle('active');
    if (notification.classList.contains('active')) {
      count++;
      counter.textContent = count;
    } else {
      count--;
      counter.textContent = count;
    }
  });
});

readAllBtn.addEventListener('click', function () {
  notifications.forEach(notification => {
    notification.classList.remove('active');
  });
  count = 0;
  counter.textContent = 0;
});
