const placeForDay = document.querySelector('.day');
const placeForHour = document.querySelector('.hour');
const placeForMinute = document.querySelector('.min');
const placeForSecond = document.querySelector('.sec');

const holiday = new Date(2022, 09, 01);

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timer = function () {
    const currentTime = new Date();
    const distance = holiday - currentTime;

    const daysLeft = Math.floor(distance / day);
    const hoursLeft = Math.floor((distance % day) / hour);
    const minutesLeft = Math.floor((distance % hour) / minute);
    const secondsLeft = Math.floor((distance % minute) / second);

    placeForDay.textContent = daysLeft;
    placeForHour.textContent = hoursLeft;
    placeForMinute.textContent = minutesLeft;
    placeForSecond.textContent = secondsLeft;
};

setInterval(timer, 1000);