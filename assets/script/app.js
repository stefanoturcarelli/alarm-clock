"use strict";

import {
  onEvent,
  getElement,
  select,
  selectAll,
  print,
  sleep,
  randomNumber,
  filterArray,
  create,
} from "./utils.js";

const clockDisplay = select(".clock-display");

const clock = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  clockDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);

// Sound Effects

const bootBtn = select(".boot-btn");
const bootSound = new Audio("./assets/sounds/boot.mp3");

onEvent("click", bootBtn, () => {
  bootSound.play();
});

const headerBarItems = selectAll(".header-bar__item");
const clickClean = new Audio("./assets/sounds/click-clean.mp3");

headerBarItems.forEach((item) => {
  onEvent("click", item, () => {
    clickClean.play();
  });
});

// Alarm

const alarmDisplay = select(".alarm-display");
const hoursInput = select(".hours-input");
const minutesInput = select(".minutes-input");
const setBtn = select(".set-btn");

const alarmSound = new Audio("./assets/sounds/pip-boy-sfx.mp3");

const alarm = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (alarmDisplay.innerHTML === `${hours}:${minutes}`) {
    alarmSound.play();
  }
};

setInterval(alarm, 1000);

onEvent("click", setBtn, () => {
  alarmDisplay.innerHTML = `${hoursInput.value}:${minutesInput.value}`;
  hoursInput.value = "";
  minutesInput.value = "";
  alarmSound.pause();
  clickClean.play();
});
