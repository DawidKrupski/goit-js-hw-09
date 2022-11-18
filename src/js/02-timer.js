import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('button');
const dateDays = document.querySelector('[data-days]');
const dateHours = document.querySelector('[data-hours]');
const dateMinutes = document.querySelector('[data-minutes]');
const dateSeconds = document.querySelector('[data-seconds]');

btn.disabled = true;
let today = new Date().getTime();
let ms = 0;
let dateSelect = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = selectedDates[0].getTime();
    if (currentDate < today) {
      btn.disabled = true;
      window.alert('Please choose a date in the future');
      return false;
    }
    btn.disabled = false;
    dateSelect = currentDate;
  },
};

flatpickr(date, options);

const calculateTime = () => {
  function convertMs(ms) {
    ms = dateSelect - today;
    console.log(ms);
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const addLeadingZero = arg => {
      if (arg <= 9) {
        return '0' + arg;
      } else {
        return arg;
      }
    };

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    const setValue = (value, container) => {
      if (value !== 0) {
        return (container.textContent = value);
      }
    };

    setValue(days, dateDays);
    setValue(hours, dateHours);
    setValue(minutes, dateMinutes);
    setValue(seconds, dateSeconds);

    return { days, hours, minutes, seconds };
  }
  console.log(convertMs(ms));
};

btn.addEventListener('click', calculateTime);
