const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
// const milisecondsEl = document.querySelector(".miliseconds");

function updateClock() {
  const currentDate = new Date();
  // setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // const miliseconds = currentDate.getMilliseconds();

  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minutesDeg = (minutes / 60) * 360;
  minutesEl.style.transform = `rotate(${minutesDeg}deg)`;

  const secondsDeg = (seconds / 60) * 360;
  secondsEl.style.transform = `rotate(${secondsDeg}deg)`;

  // const milisecondsDeg = (miliseconds / 1000) * 360;
  // milisecondsEl.style.transform = `rotate(${milisecondsDeg}deg)`;

  requestAnimationFrame(updateClock);
}

updateClock();

