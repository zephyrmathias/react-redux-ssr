/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"HomePage":"HomePage","LoginPage":"LoginPage","PostPage":"PostPage"}[chunkId]||chunkId) + "." + {"HomePage":"c7865a9f9905","LoginPage":"295939bb1dc6","PostPage":"09cc62ab1b2e"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascript/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["03QM","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "03QM":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "i8i4");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

var _reactRedux = __webpack_require__(/*! react-redux */ "/MKj");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "CnBM");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "Sy/5");

var _routes = __webpack_require__(/*! pages/routes */ "luY3");

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(/*! store */ "a8C8");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};
var store = (0, _store2.default)(initialState);

console.log((0, _reactRouterConfig.renderRoutes)(_routes2.default));

var Application = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    (0, _reactRouterConfig.renderRoutes)(_routes2.default)
  )
);

_reactLoadable2.default.preloadReady().then(function () {
  _reactDom2.default.hydrate(Application, document.getElementById('app'));
});

/***/ }),

/***/ "3ZLE":
/*!***************************************!*\
  !*** ./src/shared/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(/*! components */ "ryey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.Header, null),
    _react2.default.createElement(
      'div',
      null,
      'Apssp'
    )
  );
};

exports.default = App;

/***/ }),

/***/ "MfWs":
/*!*********************************************!*\
  !*** ./src/shared/components/AppRoutes.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "CnBM");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = __webpack_require__(/*! components/Loading */ "W8wD");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncHome = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | HomePage */ "HomePage").then(__webpack_require__.t.bind(null, /*! pages/Home */ "fZm+", 7));
  },
  modules: ['pages/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Home */ "fZm+")];
  },
  loading: _Loading2.default
});

var AsyncLogin = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | LoginPage */ "LoginPage").then(__webpack_require__.t.bind(null, /*! pages/Login */ "RzPu", 7));
  },
  modules: ['pages/Login'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Login */ "RzPu")];
  },
  loading: _Loading2.default
});

var AsyncPost = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | PostPage */ "PostPage").then(__webpack_require__.t.bind(null, /*! pages/Post */ "pNuC", 7));
  },
  modules: ['pages/Post'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Post */ "pNuC")];
  },
  loading: _Loading2.default
});

var AppRoutes = function AppRoutes() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: AsyncHome }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: AsyncLogin }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/post', component: AsyncPost })
  );
};

exports.default = AppRoutes;

/***/ }),

/***/ "W8wD":
/*!*******************************************!*\
  !*** ./src/shared/components/Loading.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading'
  );
};

exports.default = Loading;

/***/ }),

/***/ "a8C8":
/*!***********************************!*\
  !*** ./src/shared/store/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "ANjH");

var _reducers = __webpack_require__(/*! reducers */ "o7Vp");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)(_reducers2.default, initialState);
};

exports.default = configureStore;

/***/ }),

/***/ "dLl6":
/*!******************************************!*\
  !*** ./src/shared/components/Header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "eO8H");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'Header'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/' },
        'Home'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/login' },
        'Login'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/post' },
        'Post'
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ "evcW":
/*!********************************************!*\
  !*** ./src/shared/reducers/postReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCH_POSTS':
      return Object.assign({}, state, action.posts);
    default:
      return state;
  }
};

exports.default = postReducer;

/***/ }),

/***/ "luY3":
/*!*************************************!*\
  !*** ./src/shared/pages/routes.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactLoadable = __webpack_require__(/*! react-loadable */ "CnBM");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _App = __webpack_require__(/*! components/App */ "3ZLE");

var _App2 = _interopRequireDefault(_App);

var _Loading = __webpack_require__(/*! components/Loading */ "W8wD");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncHome = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | HomePage */ "HomePage").then(__webpack_require__.t.bind(null, /*! pages/Home */ "fZm+", 7));
  },
  modules: ['pages/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Home */ "fZm+")];
  },
  loading: _Loading2.default
});

var AsyncLogin = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | LoginPage */ "LoginPage").then(__webpack_require__.t.bind(null, /*! pages/Login */ "RzPu", 7));
  },
  modules: ['pages/Login'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Login */ "RzPu")];
  },
  loading: _Loading2.default
});

var AsyncPost = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | PostPage */ "PostPage").then(__webpack_require__.t.bind(null, /*! pages/Post */ "pNuC", 7));
  },
  modules: ['pages/Post'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! pages/Post */ "pNuC")];
  },
  loading: _Loading2.default
});

var routes = [{
  component: _App2.default,
  routes: [{
    component: AsyncHome,
    path: '/',
    exact: true
  }, {
    component: AsyncLogin,
    path: '/login'
  }, {
    component: AsyncPost,
    path: '/post'
  }]
}];

exports.default = routes;

/***/ }),

/***/ "o7Vp":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "ANjH");

var _postReducer = __webpack_require__(/*! ./postReducer */ "evcW");

var _postReducer2 = _interopRequireDefault(_postReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  posts: _postReducer2.default
});

exports.default = reducers;

/***/ }),

/***/ "ryey":
/*!****************************************!*\
  !*** ./src/shared/components/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(/*! ./App */ "3ZLE");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _AppRoutes = __webpack_require__(/*! ./AppRoutes */ "MfWs");

Object.defineProperty(exports, 'AppRoutes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AppRoutes).default;
  }
});

var _Header = __webpack_require__(/*! ./Header */ "dLl6");

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
//# sourceMappingURL=app.3b6d94c09105.js.map