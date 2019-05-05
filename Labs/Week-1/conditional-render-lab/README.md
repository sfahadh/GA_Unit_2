# Conditional Render Lab

More planets, now with views!

![moon revolving around earth gif](https://media.giphy.com/media/FvKe8DbAMnOda/giphy.gif)

## Introduction

In this exercise you will practice using conditional rendering to simulate full-page transitions using the [Planet API](https://wdi-nyc-planets-api.herokuapp.com/planets). You can use the [planet demo](https://git.generalassemb.ly/sei-nyc-jeopardy/planet-demo) as a guide, however, you should type out every function yourself. When you type out code it helps you to understand what the code is doing as well as reinforcing the muscle memory of common patterns in React. You can use [today's lecture notes](https://git.generalassemb.ly/sei-nyc-jeopardy/conditional-render) as a resource. 

## Deliverables

The final app should have:
- A distinct welcome screen
- An index view
- A random planet view
- A way to navigate across pages - such as with buttons that set a state variable called `currentView`.
- It must be decently styled using CSS. Delete all the default CSS that comes with `create-react-app`. 


API base url:
https://wdi-nyc-planets-api.herokuapp.com/planets
```
API routes:

GET /planets => render all planets

GET /planets/random => get a single random planet

POST /planets { name: <string>, num_moons: <number>, color: <strings> }
```

## Getting Started
- Fork and clone this repo
- cd into the repo
- run `npm init react-app planet-app`
- cd into the new react app

## Navbar

Your app will have a `Nav` component that is always rendered at the top of the page. 
The navbar should include a button for each view. 
The `onClick` handler for each button should call `setState` to change the `currentView` property in state. (Like the `setView` function we saw today in class in the `App.js` component).

## Views:

Each view of your app should be its own component. (At least one component. It can be more than one as in the render all planets view). Your component names should match its functionality (i.e. your `Form` component should have the word 'form' in its name). All of your components should live in a `components` directory. You don't have to move `App.js`into the `components` directory, but you can if you really want to. Just remember that will change the relative paths for your import statements. Note that a function that does not return any `jsx` is not a component and therefore should not be inside of the the `components` directory. (For example, a file that only returns data from an API call, is not a component).

### Your app should have the following views:
 
**1. Welcome Screen:** 

 Create a welcome screen that introduces your app.

**2. Index:** 

  Make a view to render a list of all the planets' names. 

  Include a button to refresh the index. (Make a new call to `/planets` in the `onClick` handler of this refresh button.)

**3. Random:** 

  This view will render a random planet by making a call to the `/planets/random` route. Render all available data in the random planet view: name, color and number of moons.

  Include a button to refresh the random planet. (Make a new call to `/planets/random` on click).

**4. Create new planet form view:** 

  This view renders a form that you can use to create a new planet. Change the view in the 
  `onSubmit` handler of the form so that you can see the new planet rendered at the bottom of the list of 
   planets right after the new planet is submitted.
   
## Controller function
   
  In order to switch between different views, you will create a function in `App.js` that renders a different 
  view depending on what the `currentView` in state is. This will be like the `getView` function we saw today in class. You can see it in [today's lecture notes](https://git.generalassemb.ly/sei-nyc-jeopardy/conditional-render). You can use a switch statement or if/else. 
  Call this function in the render method of `App.js`.
  
 
   
### Bonuses

- Create a button that `onClick` filters for only blue planets.
- Create a button that `onClick` filters only planets with 0 moons.
- Position your planets in the render all planet view using [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Add a 'favorite' button that adds a planet to a favorite array property in state. Add a view that renders a list of all favorite planets. 

