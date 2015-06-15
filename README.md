# hello-react-backbone
A simple example of Hello World written with [React](https://facebook.github.io/react/index.html) utilizing [Backbone](http://backbonejs.org/).

##What is this?
This example shows how to take a Backbone Model as state for a React component.

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the React component will be attached too.

### Within the jsx/bootstrap.js
Creates an instance of a Backbone Model to be utilized within the React Component via the 
[backbone-react-component Mixin](https://github.com/magalhas/backbone-react-component). 

Bootstrapping/Rendering the top-level React component into the DOM.

### Within the js/hello-model.js
The Backbone model object is extended to define the Hello model. It contains a default `place` property.

### Within the jsx/hello.js
The Hello Component is defined. The component state is set via a Backbone model and the backbone-react-component mixin and utilized within the render method, which will be invoked when this component is created/updated by React.

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. Underscore, Backbone, React, backbone-react-component & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser