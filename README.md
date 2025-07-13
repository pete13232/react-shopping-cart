# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Overview

This challenge focuses on implementing state management in React along with interactive and responsive design. It's a great practice to sharpen React fundamentals and UI/UX thinking.

## Table of contents


  - [Feature](#feature)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Reflections & Future Improvements](#reflections--future-improvements)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

### Feature

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Below are screenshots illustrating the page preview:

<div align="center">
    <img src="./design/desktop-design-empty.jpg" alt="Cart empty (Desktop)" height="600" />
    <br>
    <em>Figure 1: Cart empty (Desktop)</em>
</div>
<br>
<div align="center">
    <img src="./design/desktop-design-selected.jpg" alt="Product selected (Desktop)" width="600" />
    <br>
    <em>Figure 2: Product selected (Desktop)</em>
</div>
<br>
<div align="center">
    <img src="./design/desktop-design-order-confirmation.jpg" alt="Order Confirmation (Desktop)" width="600" />
    <br>
    <em>Figure 3: Order Confirmation (Desktop)</em>
</div>
<br>

The image above is just a sample preview.
You can explore the full experience on the DEMO below.

---

### Links

- Demo URL: [Link](https://myreact-shopping-cart.netlify.app/)
- Solution URL: [Link](https://www.frontendmentor.io/solutions/shopping-cart-using-react-OPCLTSsZTq)

---

## My process

### Built with

- React (with Vite)
- HTML5 & CSS3
- JavaScript (ES6+)
- Mobile-first workflow

### What I learned

- Gained hands-on experience with React's useState for managing and syncing data between the UI and logic.

- Learned how to track and update state in a way that keeps the user interface consistent with the underlying data.

- Practiced organizing components to be reusable, which helps improve scalability and maintainability of the codebase.

### Reflections & Future Improvements

- **Component structure:** Some parts of the UI share overlapping logic or layout but were built separately. With better planning, I could extract those into shared reusable components to reduce repetition and improve maintainability.

- **CSS organization:** Currently, styles are split into separate CSS files for each component. However, some class names are unintentionally reused across components, which may lead to unexpected style overrides. Going forward, I want to implement a more robust naming convention or use CSS Modules to avoid clashes.

### Useful resources

- [freeCodeCamp - Front End Libraries](https://www.freecodecamp.org/learn/full-stack-developer/) - This interactive course helped me learn the foundational concepts of React through short lessons and hands-on challenges. The built-in code validation system gives instant feedback, which is really helpful for beginners.
> 💡 **Tip:** The auto-checking system on freeCodeCamp can be very strict. If you're confident your code is correct but it's not passing, consider using tools like ChatGPT to double-check or help debug your solution!

---

## Author

- Frontend Mentor - [@pete13232](https://www.frontendmentor.io/profile/pete13232)
