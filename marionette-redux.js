var vent;

function marionetteMiddleware (Backbone, Marionette, _) {
	vent = vent || _.extend({}, Backbone.Events);

	['ItemView', 'CollectionView', 'CompositeView', 'Layout', 'LayoutView'].forEach(function (viewType) {
		if (!Marionette[viewType]) {
			// the name Layout was changed to LayoutView
			return;
		}
		var oldViewInitialize = Marionette[viewType].prototype.initialize;
		Marionette[viewType].prototype.initialize = function () {
			this.listenTo(vent, 'action', function (action) {
				if (this.model && this.model.handleAction && this.model.__lastAction !== action) {
					this.model.handleAction(action);
					this.model.__lastAction = action;
				}
				if (this.collection && this.collection.handleAction && this.collection.__lastAction !== action) {
					this.collection.handleAction(action);
					this.collection.__lastAction = action;
				}
			});

			oldViewInitialize.apply(this, arguments);
		};
	});

	var oldAppStart = Marionette.Application.prototype.start;
	Marionette.Application.prototype.start = function () {
		this.listenTo(vent, 'action', function (action) {
			if (this.handleAction && this.__lastAction !== action) {
				this.handleAction(action);
				this.__lastAction = action;
			}
		});

		oldAppStart.apply(this, arguments);
	};

	return function () {
		return function (next) {
			return function (action) {
				if (vent.reduxDispatchInProgress || vent.reduxActionInProgress) {
					next(action);
					return;
				}
				vent.reduxActionInProgress = true;
				vent.trigger('action', action);
				next(action);
				vent.reduxActionInProgress = false;
			};
		};
	}
}

function marionetteDispatch (dispatch, Backbone, Marionette, _) {
	vent = vent || _.extend({}, Backbone.Events);
	function wrapInitialize(type) {
		var oldInitialize = Backbone[type].prototype.initialize;
		Backbone[type].prototype.initialize = function () {
			this.on('all', function (eventType, event) {
				if (vent.reduxDispatchInProgress || vent.reduxActionInProgress) {
					return;
				}
				if (this.createAction) {
					var action = this.createAction(eventType, event);
					if (action) {
						vent.reduxDispatchInProgress = true;
						dispatch(action);
						vent.reduxDispatchInProgress = false;
					}
				}
			}.bind(this));
			oldInitialize.apply(this, arguments);
		}
	}

	Marionette.Application.prototype.dispatch = function (action) {
		vent.reduxDispatchInProgress = true;
		dispatch(action);
		vent.reduxDispatchInProgress = false;
	};

	wrapInitialize('Model');
	wrapInitialize('Collection');
}

module.exports = {
	marionetteMiddleware: marionetteMiddleware,
	marionetteDispatch: marionetteDispatch
};
