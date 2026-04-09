
# Lotto Number Generator

## Overview

This project is a simple web application that generates and displays random lottery numbers. It's built using modern web technologies, including Web Components, to create a clean and interactive user experience.

## Features

*   **Lottery Number Generation:** Generates a set of 6 unique random numbers between 1 and 45.
*   **Interactive UI:** A "Generate Numbers" button initiates the lottery draw.
*   **Visual Display:** The generated numbers are displayed in visually distinct "lotto balls."
*   **Web Components:** The application uses a custom `<lotto-ball>` element to encapsulate the styling and behavior of each lottery number, making the code more modular and reusable.

## Design and Style

*   **Layout:** A centered, clean layout that focuses on the lottery number display.
*   **Color Palette:** A vibrant and engaging color scheme is used for the lottery balls to make them stand out.
*   **Typography:** Clear and readable fonts for the numbers and UI elements.
*   **Animation:** Subtle animations on the lottery balls to enhance the user experience.

## Current Plan

This is the initial version of the application. The plan is to create the core functionality and design as described above.

**Steps:**

1.  **Update `index.html`:** Create the basic structure for the lottery generator, including a title, a button to generate numbers, and a container to display them.
2.  **Update `style.css`:** Add styles for the page layout, the "Generate Numbers" button, and the lottery balls.
3.  **Update `main.js`:**
    *   Implement the logic to generate 6 unique random numbers.
    *   Create a `<lotto-ball>` custom element to display each number with its own styling.
    *   Add an event listener to the button to trigger the number generation and display the results.
