# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![preview](./preview.jpg)

### Links

- Live Site URL: [Add live site URL here](https://miwodi-time-tracking-dashboard.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Working Data
- Try Catch

### What I learned

Through building this project, I gained valuable insights into several key JavaScript concepts and techniques:

**Data Management with Fetch & Error Handling:**
I learned how to fetch data asynchronously and handle errors using try/catch blocks, ensuring the application gracefully manages network requests and failures.

```js
try {
  const response = await fetch('./data.json');
  const data = await response.json();
  // Process data
} catch (error) {
  console.error('Error loading data:', error);
}
```

**Performance Optimization with Caching:**
I implemented caching strategies to improve performance by reducing unnecessary API calls and storing previously fetched data, resulting in faster load times and better user experience.

**Event Bubbling & Event Delegation:**
I mastered event bubbling and implemented event delegation to handle multiple interactive elements efficiently. This approach reduces the number of event listeners and improves code maintainability.

```js
document.addEventListener('click', (e) => {
  if (e.target.closest(".btn-tracking")) {
    // Handle button click with delegation
  }
});
```

## Author

- Frontend Mentor - [LaudeDignus](https://www.frontendmentor.io/profile/LaudeDignus)
