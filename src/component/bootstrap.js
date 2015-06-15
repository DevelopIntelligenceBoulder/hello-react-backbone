(function() {
    'use strict';

    //Create Hello Model Instance
    var hello = new DI.App.HelloModel();

    /**
     *  Bootstrap Hello React component.
     *  - Utilizing a Backbone Model mixin @ https://github.com/magalhas/backbone-react-component
     *  @param React element to be created
     *  @param Web Application element holding React tree of elements
     */
    React.render(
        React.createElement(DI.App.Hello, {model: hello}),
        document.getElementById('app')
    );

    //Any changes to the hello model will update automatically
    hello.set('place', 'Boulder');

})();
