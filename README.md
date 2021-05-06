# Calculator

[Live Site](https://daniel-naranjo-calculator.netlify.app/)

`https://daniel-naranjo-calculator.netlify.app/`

[Trello Board](https://trello.com/b/6aZbDUXd/daniel-naranjos-react-calculator)

* An accessible, youth-friendly, and responsive component-based Calculator app written with `JavaScript` &ensp;&amp;&ensp; `React`.

* The calculator utilizes JavaScript libraries to implement the fastest build-in methods to solve Math. 

* This app is accessible, passing the `Lighthouse` audits and resolving potential security vulnerabilities.&ensp;&ensp;`Performance : 99%`

## ___Calculator Acceptance criteria & UI Design___

- I can see a number keypad on the calculator with the numbers 0-9
- I can see keys for the plus, subtract, multiply and divide operators.
- I can see an equals `=` key.
- I can see a `+/-` key.
- I can see an all clear key `AC`.
- I can see a "screen" which shows a default value of 0.

<br/>

  ## ***Functionality***

  <br/>

  **I can enter readable +/- integers**

  - I can click a number key and see the number on the screen.
  - I can enter multi-digit numbers on the keyboard and see them on the screen.
  - When I enter a number of 1,000 or more, I see commas appear in the right place to format the number.
  - I can make a positive number negative (or vice versa) with the `+/-` key.

  <br/>

  **I can add, subtract, multiply and divide**

  - I can enter a number, `+`. another number, then `=` and see the correct addition result.
  - I can enter a number, `-`. another number, then `=` and see the correct subtraction result.
  - I can enter a number, `x`. another number, then `=` and see the correct multiplication result.

  <br/>

  **ScreenShots**
  - Operations

    <br/>
    <img src="./public/Operations.gif" alt="Operations">
    
    --------
  - Scientific notation

    <br/>
    <img src="./public/Scientific Notation.gif" alt="Scientific notation">

    --------
  - Preserve State
    
    <br/>
    <img src="./public/Preserve State.gif" alt="Preserve State">
      

<br/>
<br/>

## ___Libraries___
<br/>

1. [`math.js`](https://mathjs.org/)

* ```nodejs
  npm install mathjs
  ```
    ```javascript
  import { create, all } from 'mathjs'
    
    const config = { }
    const math = create(all, config)
  ```

2. [`css-doodle`](https://css-doodle.com/)

* ```nodejs
  npm install css-doodle
  ```
    ```javascript
  import 'css-dodle'
  ```

3. [`React-Toastify`](https://fkhadra.github.io/react-toastify/introduction)

* ```bash
  npm install --save react-toastify
  ```
  ```javascript
  import { ToastContainer, toast } from 'react-toastify'

  import 'react-toastify/dist/ReactToastify.css'

  import { Slide, Zoom, Flip, Bounce } from 'react-toastify'
  ```






<br/>
<br/>

## ___FrontEnd___
<br/>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<img src="https://api.iconify.design/logos:javascript.svg" height="36px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:html-5.svg" height="44px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:css-3.svg" height="44px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:react.svg" width="36px" height="36px">
<br/>
<br/>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<img src="https://api.iconify.design/logos:trello.svg" height="34px">
&ensp;&ensp;
<img src="https://api.iconify.design/logos:markdown.svg" height="34px">
&ensp;&ensp;
<img src="https://api.iconify.design/logos:npm-icon.svg" height="32px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:visual-studio-code.svg" height="32px">


<br/>
<br/>
<br/>

## ___BackEnd___
<br/>
<br/>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<img src="https://api.iconify.design/logos:netlify.svg" width="36px" height="36px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:circleci.svg" width="36px" height="36px">
&ensp;&ensp;&ensp;&ensp;
<img src="https://api.iconify.design/logos:git.svg" height="36px">


 <br />
 <br />

  ##### ***made*** by &ensp;<sub>&ensp;&ensp;`Daniel Naranjo`<small>&ensp;&ensp;2021</small></sub>
