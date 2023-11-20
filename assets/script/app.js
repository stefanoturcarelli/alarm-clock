"use strict";

import { onEvent, select, cleanOutput, displayText } from "./utils.js";

const currentTime = select(".current-time");
const displayAlarm = select(".display-alarm");
const hours = select(".hours");
const minutes = select(".minutes");
const setAlarmBtn = select(".set-alarm-btn");
const bell = select(".fa-solid.fa-bell");
let now = new Date();
let alarmTime = null;
let soundTimeout;

function showCurrentTime() {
  now = new Date();
  cleanOutput(currentTime);
  displayText(
    `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`,
    currentTime
  );
  compareTimes();
}

function setAlarm() {
  const setHours = hours.value;
  const setMinutes = minutes.value;

  if (setHours === "" || setMinutes === "") {
    cleanOutput(displayAlarm);
    displayText(`Please enter the time`, displayAlarm);
  } else {
    cleanOutput(displayAlarm);
    bell.style.display = "block";
    displayText(`${setHours.padStart(2, "0")}`, displayAlarm);
    displayText(`:`, displayAlarm);
    displayText(`${setMinutes.padStart(2, "0")}`, displayAlarm);

    alarmTime = new Date(2023, 10, 20, setHours, setMinutes, 0, 0);

    clearTimeout(soundTimeout);
  }
}

function compareTimes() {
  if (
    alarmTime &&
    alarmTime.getHours() === now.getHours() &&
    alarmTime.getMinutes() === now.getMinutes()
  ) {
    playSound();
  }
}

const sound = new Audio("./assets/media/alarm-sound.wav");

function playSound() {
  sound.play();

  soundTimeout = setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
    bell.style.display = "none";
  }, 10000);
}

onEvent("click", setAlarmBtn, () => {
  setAlarm();
});

setInterval(showCurrentTime, 1000);
