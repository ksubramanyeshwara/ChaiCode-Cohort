# ReactJS

- index.html file in the root directory, which is used as the entry point for the browser.
- index.html have a script file called `src/main.jsx`, which is the entry point for the React application.
- main.jsx we use the `ReactDOM.createRoot` method to render the React application into the root element of the HTML document.

ReactDOM is a library for rendering React components to the DOM.

`npm install --save-dev prettier` is used to install prettier as a development dependency and will be used to format the code in the project.

`touch .prettierrc` is used to create a new file called `.prettierrc` in the root directory of the project. This file will be used to configure prettier.

`npm install --save-dev eslint` is used to install eslint as a development dependency and will be used to lint the code in the project.

## prettier vs eslint

- prettier formats the code to make it more readable
- eslint checks the code for errors and enforces coding standards.

## babel

Babel is a JavaScript compliler that converts modern JavaScript (ES6+ and JSX) into a version that is compatible with older browsers.