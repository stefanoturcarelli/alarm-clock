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

// ! Sound Effects

// * Boot button

const bootBtn = select(".boot-btn");
const bootSound = new Audio("./assets/sounds/boot.mp3");

onEvent("click", bootBtn, () => {
  bootSound.play();
});

// * Clicks

const clickClean = new Audio("./assets/sounds/click-clean.mp3");
const clickOne = new Audio("./assets/sounds/click-1.mp3");
const clickTwo = new Audio("./assets/sounds/click-2.mp3");
const clickThree = new Audio("./assets/sounds/click-3.mp3");
const clickFour = new Audio("./assets/sounds/click-4.mp3");
const clickFive = new Audio("./assets/sounds/click-5.mp3");
const clickSix = new Audio("./assets/sounds/click-6.mp3");
const clickSeven = new Audio("./assets/sounds/click-7.mp3");
const clickEight = new Audio("./assets/sounds/click-8.mp3");

const clickSounds = [
  clickOne,
  clickTwo,
  clickThree,
  clickFour,
  clickFive,
  clickSix,
  clickSeven,
  clickEight,
];

function randomClick() {
  const random = randomNumber(0, clickSounds.length - 1);
  return clickSounds[random];
}

const headerBarItems = selectAll(".header-bar__item");

headerBarItems.forEach((item) => {
  onEvent("click", item, () => {
    randomClick().play();
  });
});

// * Alarm

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

// Use enter to set alarm with setBtn
onEvent("keyup", minutesInput, (e) => {
  if (e.keyCode === 13) {
    alarmDisplay.innerHTML = `${hoursInput.value}:${minutesInput.value}`;
    hoursInput.value = "";
    minutesInput.value = "";
    alarmSound.pause();
    clickClean.play();
  }
});
