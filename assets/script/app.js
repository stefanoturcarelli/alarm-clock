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
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds().toString().padStart(2, "0");

  clockDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);
