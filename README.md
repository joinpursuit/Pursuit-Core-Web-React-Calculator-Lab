# React Calculator

A smart caculator built entirely with React

## Overview

- Calculator utilizes a number of mathetical functions including Parentheses math using Dijkstra's algorithm.
- Responsive web application displays full equation on screen

## UI

Deployed online here: [SmartCalculator](https://smartcalculator.netlify.app/)

Similar Calculator design templates:

<img src="./images/exampleScreenshotOne.png" alt="Example One" width="400">
<img src="./images/exampleScreenshotTwo.png" alt="Example Two" width="400">
<img src="./images/exampleScreenshotThree.png" alt="Example Three" width="400">

## User Stories

### User Stories

1. I can see a calculator UI.
1. I can enter and see positive and negative integers.
1. I can add, subtract, multiply, and divide.
1. I can clear my input to reset everything.
1. I can visit the calculator on the Internet.

### Acceptance Criteria

**I can see a calculator UI.**

- I can see a number keypad on the calculator with the numbers 0-9.
- I can see keys for the plus, subtract, multiple, and divide operators.
- I can see an equals `=` key.
- I can see a `+/-` key.
- I can see an all clear key `AC`.
- I can see a "screen" which shows a default value of 0.

**I can enter readable positive and negative integers.**

- I can click a number key and see the number on the screen.
- I can enter multi-digit numbers on the keypad and see them on the screen.
- When I enter a number of 1,000 or more, I see commas appear in the right place to format the number. (Example: 14,563,024)
- I can make a positive number negative (or vice versa) with the `+/-` key.

**I can add, subtract, multiply, and divide.**

- I can enter a number, `+`, another number, then `=` and see the correct addition result.
- I can enter a number, `-`, another number, then `=` and see the correct subtraction result.
- I can enter a number, `x`, another number, then `=` and see the correct multiplication result.
- I can enter a number, `x`, another number, then `=` and see the correct division result _rounded to the nearest integer_.

**I can clear my input to reset everything.**

- When I click the clear key, the number on the screen is removed.
- When I click the clear key, I see a default number `0` on the screen.
- When I click the clear key during a calculation in progress, the full state is reset. (When I push `=`, the screen should still say `0`)

**I can visit the calculator on the Internet.**

- A working public URL is submitted that loads the project.

### Code Quality Rubric

- Use JSX to create components
- Use create-react-app to build React applications
- Respond to user input to update the views in a React app
- Use state to build stateful React applications
- Use Flexbox and/or Grid to lay out a page

### Stretch Features

- `.` button that adds a decimal point to the current number
- `%` button that converts the current value into a percentage
- Support exponentiation and square roots
- Support geometric operations (`sin`, `cos`, `tan`, etc.)

### Stretchier Stretch Features
- Write Cypress tests for your calculator!
- Support large and small numbers with [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation#E_notation)
- Change the clear button to toggle between:
    - AC Clears all of the data in the screen and all the history
    - C: Clears only what is being displayed
- Chain together multiple operands
    - ex:  5 + 5 + 5

### Super-Stretch Features
- Chain together multiple equals sign button pushes
    - ex: `5` `+` `5` `=` `=` `=` should display `20`
- `()` buttons to support order of operations
- Implement [Dijkstra's famous two-stack algorithm](https://youtu.be/0sixdU-cehs?t=395) to calculate expressions with `()`


Helpful Libraries for Decimals:
- [decimal.js](https://mikemcl.github.io/decimal.js/)
- [math.js](https://mathjs.org/)



## Deployment 
Deployed using these [instructions](https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/react/react_deployment)
