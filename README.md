# NavBar-Auto-DropShadow
This project demonstrates how to create a fixed navigation bar that stays at the top of the page when you scroll down, with a smooth drop shadow effect appearing under it. This is a basic HTML, CSS and JavaScript implementation, ideal for adding a clean and functional navigation bar to any webpage.

## Demo

Follow the link - https://arssshhh.github.io/NavBar-Auto-DropShadow/

You can see the project in action by scrolling down the page. The navigation bar will stick to the top of the viewport and a drop shadow will appear under it to enhance the visual separation from the rest of the content.

## Features

- **Fixed Navigation Bar**: The navigation bar sticks to the top of the viewport as you scroll down the page.
- **Drop Shadow Effect**: A subtle drop shadow appears under the navigation bar when the page is scrolled, providing a polished look.

## Technologies Used

- **HTML5**: For the basic structure of the webpage.
- **CSS3**: For styling the navigation bar, adding the fixed effect, and the drop shadow.
- **JavaScript**: For adding Drop-shadow functionality, when the webpage is scrolled.

## Installation

To use this project, you can clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/Arssshhh/NavBar-Auto-DropShadow.git
cd NavBar-Auto-DropShadow
```

Then open `index.html` in your preferred web browser.

## Adding this functionality to your own website

1. Add "navbar" class to the 'nav' tag element
   ```html
   <nav class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
   ```
2. Add specific CSS properties to the below mentioned classes
   ```css
   .navbar {
    position: fixed;
    box-shadow: 0 0 0 transparent; /* No shadow initially */
    transition: box-shadow 0.3s ease-in-out;
   }
   .navbar.scrolled {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow when scrolled */
   }
   ```
3. Add below specified JavaScript code to add "scrolled" class to 'nav' tag when the webpage is scrolled along Y axis.
   ```javascript
   window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
   };  
   ```

## Usage

1. **Clone the repository** or download the project files.
2. Open the `index.html` file in your browser to view the navigation bar in action.
3. Customize the content inside the `<nav>` element in `index.html` to fit your needs.
4. Adjust the styles in `styles.css` to match your website's design.

## Customization

You can easily customize the navigation bar and its behavior:

- **Change the Navigation Links**: Edit the `<ul>` list items inside the `<nav>` element in `index.html` to add or remove links.
- **Modify Styles**: Update the `styles.css` file to change the background color, text styles, or shadow effect.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements. Contributions are welcome!
