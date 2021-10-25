https://igoroknerovnyi1980.github.io/redux-have-to-use

login: test
password: 123

## About

Greetings !!
This application is intended for training purposes. Here I show how to use Redux in a bundle with React. And yes - you can use this application as a template for your PET projects. At the moment, 4 patterns are implemented in the appendix - switching tabs, switching the theme theme, authorization and asynchronous data obtaining. Perhaps other solutions will be added.

- [Main technologies](#main-technologies)
- [Application structure](#application-structure)
- [About the code style](#about-the-code-style)

## Main technologies

- react
- react-router
- react-redux
- redux-saga
- axios
- styled-components
- moment.js

## Application structure

/public - no special contains. If you use in your projects, replace title and favicon.ico file.
/src - contains all parts of the application and divided into logical groups.
/api - contains configuration files to appeal to a specific API (urls, requests, tokens password, etc.).
/assets - directory for image files svg/png/jpg
/lib - directory for additional files, configs, etc.
/components - here are repeatedly used UI components (button, input, page container, etc./content - each file is a container to display any content on the page. All logic and UI components are connected to the container.
/fonts - fonts folder. Fonts are added to the implementation of the application.
/hooks - in this directory there are custom hooks.
/pages - components to display the application page.
/redux - this directory contains all components for the Redux work including Saga.
/styles - here all files, variables and configurations for working with styles and themes of the application.
/Router.js - page configuration file in the application.
/App.js
/index.js - the main application file.

## About the code style

I adhere to the rules for writing different types of files. For a better understanding of the code, I will describe them below.

#### Frequently used components.

Imports and styles constants are recorded at the top. All roses are described via PROPTYPES. All optional parameters are described in Default Prop. Do not use directly in these components. Storage, internal state, or marking with text. Try not to write more than 200 lines of code in one file.

#### Components from the Content directory.

Such a component is collected from small UI components, it may contain its styles and a state. Try to make all logic in a hook for this component. Minimize the use of UI elements written inside this component. Carefully consider the solution to use the local state in the component.

#### Hooks.

Do not return the markup in the hook. I prefer to return an object, where by the name of the key you can get the necessary parameter. Describe all logic here (methods, data from storage, etc.) to work with a specific component from the Content directory. If you write an auxiliary hook for example userouter.js Describe the principle of operation and patterns in the comments.

#### Pages.

Such a component is collected from ready-made containers Do not write logic and styles here.

#### Styles.

Using styled-components Allows you to record styles right in the component, which eliminates the project from additional files and folders. In this application, I deliberately used components, and classes and inline styles and animation so that you can see. styled-components is easy! Also, for example, I added variables and topics. To add a new topic, you need to add your object with the colors to the variable file following the example baseColors and darkColors. Add it to export and in the file with themes configure the topic with your set of colors. The topic is automatically added to the theme selector selector and the /themes-example page.

#### Reducer.

To write a new, copy any ready-made, replace the InitialState object, describe your cases, add event types to the types.js file and export your reduser to the index file.

#### Saga.

Writing a new saga similarly to reducer, but the saga more volume and, depending on the task, can differ dramatically. Be attentive and read the docks. ;)
