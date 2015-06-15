(function() {
	'use strict';

	/**
	 * Defining Hello React Component. This is syntactic sugar for
	 *   a JavaScript Object Constructor Function.
	 * @param Object Literal of Component properties
	 */
	DI.App.Hello = React.createClass({displayName: "Hello",
		//Mixin to allow Backbone Model usage
		mixins: [Backbone.React.Component.mixin],
		/**
		 * React life-cycle method used to return this component.
		 *  Utilizes the properties and state placed into it.
		 */
		render: function() {
			console.log(this.state);
			//Rendered HTML with the component state
			return (
				React.createElement("h1", null, "Hello ", this.state.model.place)
			)
		}
	});

})();