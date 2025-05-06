// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function multiplies two numbers using addition.
 */
function multiplyThroughAddition() {
  const positiveInteger = parseInt(document.getElementById("positive-integer").value);
  let counter = parseInt(document.getElementById("counter").value); // Changed to let
  let product = 0; // Changed to let

  while (counter > 0) {
    product = product + positiveInteger; // Accumulate the product
    counter--; // Decrement counter to avoid infinite loop
  }

  // Display the result in the "result" div
  document.getElementById("result").innerText = `The product is: ${product}`;
}
