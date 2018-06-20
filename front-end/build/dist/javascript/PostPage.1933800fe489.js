(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PostPage"],{

/***/ "Rn7H":
/*!************************************!*\
  !*** ./src/shared/actions/post.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ "vDqi");

var _axios2 = _interopRequireDefault(_axios);

var _post = __webpack_require__(/*! actionTypes/post */ "TSAO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchPosts = function fetchPosts() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://jsonplaceholder.typicode.com/posts/1');

            case 2:
              res = _context.sent;

              dispatch({
                type: _post.FETCH_POSTS,
                payload: res.data
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = fetchPosts;

/***/ }),

/***/ "pNuC":
/*!***********************************!*\
  !*** ./src/shared/pages/Post.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "q1tI");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "/MKj");

var _post = __webpack_require__(/*! actions/post */ "Rn7H");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
  }

  _createClass(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetching();
      this.props.fetchPosts();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'POST'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'UserId: ',
          this.props.posts.userId
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Id: ',
          this.props.posts.id
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Title: ',
          this.props.posts.title
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.posts.body
        )
      );
    }
  }], [{
    key: 'fetching',
    value: function fetching(store) {
      console.log('123');
      return [store.dispatch((0, _post2.default)())];
    }
  }]);

  return Post;
}(_react2.default.Component);

Post.propTypes = {
  posts: _propTypes2.default.shape({
    userId: _propTypes2.default.number,
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    body: _propTypes2.default.string
  }).isRequired,
  fetchPosts: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var posts = _ref.posts;
  return {
    posts: posts
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: function fetchPosts() {
      return dispatch((0, _post2.default)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Post);

/***/ })

}]);
//# sourceMappingURL=PostPage.1933800fe489.js.map