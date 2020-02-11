# responsive-card-component

## Instructions
After cloning the repository, run `npm install` to install all dependencies.

Run `npm run start` to see it working in the browser.

Run `npm run test` to run the tests.

## Assumptions
* All images for the cards have the same height
* All logo images have the same size/aspect ratio
* There will never be too much text in the card
* Browser compatibility: Edge 13+

## Approach
I chose not to put any media queries on the component itself, instead, I have layed out the card on a page as it would be used.
The page, then has media queries that update the font size of the HTML tag to adapt to devices with a dense screen and to stack the layout instead of using columns when viewing on a narrow window or mobile phone.

The component takes 2 required props and 2 optionan ones.
* background (required): string containing the url of the background image
* logo (required): string containing the url of the logo image
* text (optional | default ''): string containgn the text to be shown on the overlay
* maxWidth (optional | default '100%'): string containing the max width of the card

## Things to improve on
Had I had more time, I would like to test the page on more devices and write tests with `jest-styled-components`. This issue (https://github.com/styled-components/jest-styled-components/issues/291) has prevented me from using it and the suggested solution did not work for me. Downgrading `jest-styled-components` was also not an option because `styled-components` had a breaking change in the last major update.

## Demo
https://vinifala.github.io/responsive-card-component/
