const body = document.querySelector('body');
const [startBtn, stopBtn] = document.querySelectorAll('button');

let colorInterval = null;
stopBtn.disabled = true;

const startColorChange = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  colorInterval = setInterval(() => {
    const getRandomHexColor = () => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    console.log(getRandomHexColor());
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopColorChange = () => {
  clearInterval(colorInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
