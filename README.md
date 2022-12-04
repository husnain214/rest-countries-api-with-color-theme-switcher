# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/rest-countries-api-with-react-axios-html-css-custom-properties--Y2IK0KSPB
- Live Site URL: https://gleaming-souffle-708edc.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Axios](https://axios-http.com/) - Promise based HTTP client

### What I learned
I learned changing themes with only CSS and also used some new media queries.

```CSS
:root:has(.theme-switcher:checked) {
  --clr-body-bg: 207 26% 17%;
  --elements-bg: 209, 23%, 22%;
  --clr-text: 0 0% 100%; 
  --theme-svg-fill: var(--clr-text);
  --theme-svg-stroke: var(--elements-bg);
}

@media(prefers-color-scheme: dark) {
  :root {
      --clr-body-bg: 207 26% 17%;
      --elements-bg: 209, 23%, 22%;
      --clr-text: 0 0% 100%; 
      --theme-svg-fill: var(--clr-text);
      --theme-svg-stroke: var(--elements-bg);
  }
}

@media(prefers-color-scheme: light) {
  :root {
      --clr-body-bg: 0 0% 98%;
      --elements-bg: 0 0% 100%;
      --clr-input-bg: 0 0% 52%;
      --clr-text: 200 15% 8%;
      --theme-svg-fill: var(--elements-bg);
      --theme-svg-stroke: var(--clr-text);
  }
}
```
I also created my own utility classes which I learned from Kevin Powell on YouTube. 
```CSS
.elements-bg { background-color: hsl( var(--elements-bg) ); }
.input-bg { background-color: hsl( var(--clr-input-bg) ); }
.body-bg { background-color: hsl( var(--clr-body-bg) ); }

.text-color-strong { color: hsl( var(--clr-text) ); }
.text-color-weak { color: hsl( var(--clr-text) / .9); }
```
I also had to learn React Router for this project and how to pass data from one page to another.
```js
<Link to = {`/${country.name.common}`} state = {{ country, countries }}>
```

### Useful resources

- https://scrimba.com/learn/spacetravel - I learnt to make my own mini css framework specialized towards a single project. Learning utility classes was extremely helpful.
- https://www.youtube.com/watch?v=Ul3y1LXxzdU - Kyle is amazing at explaining React Router in this video.

## Author

- Website - https://fantastic-khapse-2cca16.netlify.app/
- Frontend Mentor - https://www.frontendmentor.io/profile/husnain214


