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
var fetchPosts = function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    posts: {
      userId: '123',
      id: 1,
      title: 'This is post title',
      body: 'This is post body'
    }
  };
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
        _react2.default.createElement('h2', null)
      );
    }
  }]);

  return Post;
}(_react2.default.Component);

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
//# sourceMappingURL=PostPage.09cc62ab1b2e.js.map