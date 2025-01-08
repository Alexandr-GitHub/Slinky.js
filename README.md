# Slinky.js

Slinky.js is a lightweight and flexible JavaScript library designed to create multi-level slide-in menus with animation effects. This library allows you to easily implement interactive menus on your website, enhancing user experience with smooth transitions and intuitive navigation.

## Features

- **Multi-Level Menus**: Supports nested menus, allowing users to drill down into submenus.
- **Custom Transition Speed**: Configure the speed of transition animations to fit your design needs.
- **Responsive Design**: Seamlessly integrates with existing layouts and styles.
- **Dynamic Title Changes**: Automatically updates the menu title based on the current menu depth.
- **Back Navigation**: Implement back navigation to return to the previous menu level easily.

## Installation

To get started with Slinky.js, you can include it directly in your HTML file or install it via a package manager.

### HTML
```html
<link rel="stylesheet" href="slinky.css">
<script src="slinky.js"></script>
```

### Via npm

```bash
npm install slinky-menu
```

## Usage

To create a new Slinky instance, instantiate it with the desired selector and options:

```javascript
import { Slinky } from 'slinky-menu';

const myMenu = new Slinky('.my-menu', {
    transitionSpeed: '300',
    defaultTitle: 'My Menu',
});
```

## HTML Structure

To work with Slinky.js, your HTML must follow a specific structure. Here is a basic example:

```html
<div class="menu">
    <div class="menu-header">
        <div class="slinky-back-btn">Back</div>
        <div class="slinky-title">Title menu</div>
        <div class="menu-close">Close menu</div>
    </div>
    <div class="slinky-container">
        <ul class="slinky">
            <li class="menu-parent">
                <a class="slinky-next" href="#">Catalog</a>
                <div class="menu-child" data-title="Catalog">
                    <ul>
                        <li><a href="#">Subdirectory 1</a></li>
                        <li><a href="#">Subdirectory 2</a></li>
                        <li class="menu-parent">
                            <a class="slinky-next" href="#">Subdirectory 3</a>
                            <div class="menu-child" data-title="Subdirectory 3">
                                <ul>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="menu-parent">
                <a class="slinky-next" href="#">Services</a>
                <div class="menu-child" data-title="Services">
                    <ul>
                        <li><a href="#">Service 1</a></li>
                        <li><a href="#">Service 2</a></li>
                        <li><a href="#">Service 3</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </div>
</div>
```

## Options

| Option                    | Type   | Default Value  | Description                                                       |
|---------------------------|--------|----------------|-------------------------------------------------------------------|
| titleMenuSelector         | string | .slinky-title   | CSS selector for the title element of the menu.                  |
| nextButtonSelector        | string | .slinky-next    | CSS selector for the next buttons.                                |
| backButtonSelector        | string | .slinky-back    | CSS selector for the back button.                                 |
| parentSelector            | string | .menu-parent     | CSS selector for parent menu items.                               |
| childSelector             | string | .menu-child      | CSS selector for child menu items.                                |
| transitionSpeed           | int | 300              | Speed of the transition animations in milliseconds.               |
| defaultTitle              | string | Menu             | Default title displayed in the menu.                              |
| openedClass               | string | opened           | Class added to opened menu items.                                 |
| showBtnClass              | string | show             | Class for showing the back button when a menu is open.           |

## Methods

### clearMenu()

Resets the menu to its initial state by closing all opened menus and resetting the title.

### changeTitle(title)

Updates the displayed title of the menu.

### backMenu()

Navigates back to the previous menu level.

## Contributing

If you would like to contribute to Slinky.js, please fork the repository, create a new branch, and submit a pull request.