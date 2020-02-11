# responsive-card-component

## Instructions
After cloning the repository, run `npm install` to install all dependencies.

Run `npm run start` to see it working in the browser.

Run `npm run test` to run the tests.

## Assumptions
* All images for the cards have the same height
* All logo images have the same size/aspect ratio
* There will never be too much text in the card

## Approach
I chose to use `rem` and `%` for most of the sizes as they allow the page to have a similar experience across a wide range of devices.

The `html` tag has media queries that control the font size depending on device size and pixel density.
The Card component, in turn, has relative sizes to adapt accordingly. 
I chose to make the component in this way as it would be consistent within the context it will live in.

## Demo
https://vinifala.github.io/responsive-card-component/
