# Redux-Marionette

This is a simple connection between Marionette and redux. It's designed to ease a transition to redux, it could be used to bring elements of the one way data flow to Marionette but the mess you end up with will be yours and yours alone.

To use it add `model.handleAction` and `model.createAction` to the models (and collections) that you want integrated into redux and add the Backbone Middleware and Dispatch to redux.

[See it in action](http://stutrek.github.io/redux-marionette/)

## Usage

[The best way to learn may be the tutorial PR](https://github.com/stutrek/redux-marionette/pull/1/files).

### In Your Redux

Add this to your store:

```javascript
import {marionetteMiddleware, marionetteDispatch} from 'redux-marionette';

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(marionetteMiddleware(window.Backbone, window.Backbone.Marionette, window._))
  )(createStore)(rootReducer, initialState)
  
  marionetteDispatch(store.dispatch, Backbone, _);

  return store
}

```

_note: you have to pass in Backbone, Marionette, and underscore becase we're not going to judge your old architecture._

### In Your Backbone

Redux-Marionette binds to the lifecycle of your views, so any model or collection attached to a view will transparently be attached to your reducer and dispatcher then disconnected when the view is removed.

#### For global actions

```javascript
var MyApp = Marionette.Application.extend({
	handleAction: function (action) {
		// act on global actions
	}
});
```
_note: you may also assign `app.handleAction` after your app has been created._

#### For actions that apply to a Model or Collection

```javascript
// this will work exactly the same way for Collections
var MyModel = Backbone.Model.extend({

	initialize: function () {
		// if you're overriding initialize, you must do this.
		Backbone.Model.prototype.initialize.call(this);
	},

	handleAction: function (action) {
		if (action.id !== this.id) {
			return;
		}

		switch (action.type) {
			case 'VALUE_CHANGE':
				this.set('value', action.value);
				return;
		}
	},

	createAction: function (eventName) {
		var action = this.toJSON();
		switch (eventName) {
			case 'change:value':
				action.type = 'VALUE_CHANGE';
				return action;
		}

		return;
	},
});
```