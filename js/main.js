'use strict'

function calculate(btn) {
  if (btn !== "." && typeof(btn) === 'string') {
    count = 0;
  } 

  if (input.value === "" && typeof(btn) === "string") {
    return;
  }

  if (btn === "=") {
    operators.forEach(operator => {
      if(input.value.slice(-1) === operator.textContent) {
        bool = 1
      }
    });
  }

  operators.forEach(operator => {
    if(btn === operator.textContent) {
      if(input.value.slice(-1) === btn) {
        bool = 1;
      } else {
        bool = 0;
        operators.forEach(operator => {
          if(input.value.slice(-1) === operator.textContent) {
            input.value = input.value.slice(0, -1)
          }
        });
      }
    }
  });

  if(bool === 1) {
    return;
  }

  

  if (btn === "=") {
    input.value = input.value.replace("×", "*");
    input.value = input.value.replace("÷", "/");
    input.value = eval(input.value);
  } else if (btn === "C") {
    input.value = '';
  } else {
    if (btn === "×") {
      btn = "*";
      // if(input.value.slice(-1) === "×") {
      //   return;
      // }
    } else if (btn === "÷") {
      btn = "/"
    } else if (btn === ".") {
      if(count === 1) {
        return;
      } 
      count++;
    }
    input.value += btn;
    input.value = input.value.replace("*", "×");
    input.value = input.value.replace("/", "÷");
  }
}

const input = document.querySelector("input");
const operators = document.querySelectorAll('.operator');
var bool;
var count = 0;