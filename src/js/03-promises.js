import Notiflix from "notiflix";

const form = document.querySelector(".form");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  RefsNumber = {
    delay: Number(form.elements.delay.value),
    step: Number(form.elements.step.value),
    amount: Number(form.elements.amount.value),
  };
for (let i = 0; i < amount; i++) {
  const element = array[i];
  
}
}
);

