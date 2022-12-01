import Notiflix from 'notiflix';

const form = document.querySelector('form');
const submit = document.querySelector(`[type="submit"]`);
const firstDelay = document.querySelector(`[name="delay"]`);
const delayStep = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);

function createPromise() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve('success');
    } else {
      reject('failure');
    }
  });
}

const send = event => {
  submit.disabled = true;
  let disabledTime = delayStep.value * amount.value + Number(firstDelay.value);
  setTimeout(() => {
    submit.disabled = false;
    form.reset();
  }, disabledTime);
  event.preventDefault();
  if (amount.value <= 0) {
    Notiflix.Notify.failure(`❌ Amount can't be lower than 1`);
    return false;
  }
  setTimeout(() => {
    for (let i = 0; i < amount.value; i++) {
      let position = i + 1;
      let delay = delayStep.value * i + Number(firstDelay.value);
      setTimeout(() => {
        createPromise()
          .then(() => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            );
          })
          .catch(() => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            );
          });
      }, delay);
    }
  }, firstDelay.value);
};

submit.addEventListener('click', send);
