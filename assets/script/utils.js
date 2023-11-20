"use strict";

/**
 * Utility functions
 * OnEvent
 * getElement (by id)
 * select
 * selectAll
 * print
 * sleep
 * randomNumber
 * filterArray
 * create
 */

// Add event listener
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Select HTML element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get a (node) list of HTML elements as array
function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// Sleep
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Create an HTML element
function create(element, parent = document) {
  return parent.createElement(element);
}

// Display text
function displayText(text, output) {
  let newParagraph = document.createElement("p");
  newParagraph.appendChild(document.createTextNode(text));
  return output.appendChild(newParagraph);
}

// Clean output
function cleanOutput(output) {
  output.innerHTML = "";
}

export { onEvent, select, selectAll, sleep, create, displayText, cleanOutput };
