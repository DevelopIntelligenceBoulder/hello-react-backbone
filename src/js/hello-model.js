(function() {
    'use strict';

    /**
     * Hello Backbone Model.
     */
    DI.App.HelloModel = Backbone.Model.extend({
        //Defaulting place model property to "World"
        defaults: {
            place: 'World'
        }
    });

})();