webpackHotUpdate(0,{

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(81);\n\nvar _reducers = __webpack_require__(82);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _backboneRedux = __webpack_require__(443);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// compose(\n// \t\tapplyMiddleware(promiseMiddleware), // create a new logger @ https://www.npmjs.com/package/redux-logger#usage\n// \t\treduxReactRouter({\n// \t\t\troutes,\n// \t\t\tcreateHistory\n// \t\t})\n// \t)\n\nfunction configureStore(initialState) {\n  var store = (0, _redux.compose)((0, _redux.applyMiddleware)(_backboneRedux.backboneMiddleware))(_redux.createStore)(_reducers2.default, initialState);\n\n  if (true) {\n    // Enable Webpack hot module replacement for reducers\n    module.hot.accept(82, function () {\n      var nextReducer = __webpack_require__(82).default;\n      store.replaceReducer(nextReducer);\n    });\n  }\n\n  return store;\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzP2ZmZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xuXG5pbXBvcnQge2JhY2tib25lTWlkZGxld2FyZX0gZnJvbSAnLi4vLi4vYmFja2JvbmUtcmVkdXguanMnO1xuXG5cblxuLy8gY29tcG9zZShcbi8vIFx0XHRhcHBseU1pZGRsZXdhcmUocHJvbWlzZU1pZGRsZXdhcmUpLCAvLyBjcmVhdGUgYSBuZXcgbG9nZ2VyIEAgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVkdXgtbG9nZ2VyI3VzYWdlXG4vLyBcdFx0cmVkdXhSZWFjdFJvdXRlcih7XG4vLyBcdFx0XHRyb3V0ZXMsXG4vLyBcdFx0XHRjcmVhdGVIaXN0b3J5XG4vLyBcdFx0fSlcbi8vIFx0KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZShiYWNrYm9uZU1pZGRsZXdhcmUpXG4gICkoY3JlYXRlU3RvcmUpKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9yZWR1Y2VycycsICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRSZWR1Y2VyID0gcmVxdWlyZSgnLi4vcmVkdWNlcnMnKS5kZWZhdWx0XG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcilcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzdG9yZS9jb25maWd1cmVTdG9yZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7QUFiQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 443:
/***/ function(module, exports) {

	eval("var Backbone = window.Backbone;\nvar _ = window._;\n\nvar vent = _.extend({}, Backbone.Events);\n\nconst backboneMiddleware = () => {\n\treturn (next) => (action) => {\n\t\tvent.trigger('action', action);\n\t\treturn next(action);\n\t};\n};\n\nvent.on('action', action => console.log(action));\n\nmodule.exports = {\n\tbackboneMiddleware: backboneMiddleware,\n\tvent: vent\n};\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2JhY2tib25lLXJlZHV4LmpzPzM2MjYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJhY2tib25lID0gd2luZG93LkJhY2tib25lO1xudmFyIF8gPSB3aW5kb3cuXztcblxudmFyIHZlbnQgPSBfLmV4dGVuZCh7fSwgQmFja2JvbmUuRXZlbnRzKTtcblxuY29uc3QgYmFja2JvbmVNaWRkbGV3YXJlID0gKCkgPT4ge1xuXHRyZXR1cm4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcblx0XHR2ZW50LnRyaWdnZXIoJ2FjdGlvbicsIGFjdGlvbik7XG5cdFx0cmV0dXJuIG5leHQoYWN0aW9uKTtcblx0fTtcbn07XG5cbnZlbnQub24oJ2FjdGlvbicsIGFjdGlvbiA9PiBjb25zb2xlLmxvZyhhY3Rpb24pKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGJhY2tib25lTWlkZGxld2FyZTogYmFja2JvbmVNaWRkbGV3YXJlLFxuXHR2ZW50OiB2ZW50XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9iYWNrYm9uZS1yZWR1eC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})