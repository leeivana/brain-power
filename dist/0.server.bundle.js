exports.ids = [0];
exports.modules = {

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(9);

var _ClassList = __webpack_require__(88);

var _ClassList2 = _interopRequireDefault(_ClassList);

var _Typography = __webpack_require__(19);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style
//import styles from './Class.css';

var ClassListPage = function (_Component) {
  _inherits(ClassListPage, _Component);

  function ClassListPage() {
    _classCallCheck(this, ClassListPage);

    return _possibleConstructorReturn(this, (ClassListPage.__proto__ || Object.getPrototypeOf(ClassListPage)).apply(this, arguments));
  }

  _createClass(ClassListPage, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx(_ClassList2.default, {
        classes: this.props.classes
      }));
    }
  }]);

  return ClassListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    classes: [{
      name: 'LA Intermediate 2'
    }, {
      name: 'LA Intermediate 1'
    }, {
      name: 'LA Intermediate 3'
    }, {
      name: 'LA Intermediate 4'
    }, {
      name: 'LA Intermediate 5'
    }]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ClassListPage);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesPropType = exports.ClassItemPropType = exports.ClassPropType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassPropType = exports.ClassPropType = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  teacherId: _propTypes2.default.string.isRequired,
  startTime: _propTypes2.default.string.isRequired,
  endTime: _propTypes2.default.string.isRequired,
  dayOfWeek: _propTypes2.default.string.isRequired
};

var ClassItemPropType = exports.ClassItemPropType = {
  classItem: _propTypes2.default.shape(ClassPropType)
};

var ClassesPropType = exports.ClassesPropType = {
  classes: _propTypes2.default.arrayOf(_propTypes2.default.shape(ClassPropType)).isRequired
};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ClassItem = __webpack_require__(89);

var _ClassItem2 = _interopRequireDefault(_ClassItem);

var _Grid = __webpack_require__(72);

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = __webpack_require__(87);

var _ClassList = {
  "root": "_3L1k2t8ry3pnFu8ddae6PE"
};

var _ClassList2 = _interopRequireDefault(_ClassList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClassList(props) {
  return _jsx(_Grid2.default, {
    container: true,
    spacing: 24,
    className: _ClassList2.default.root
  }, void 0, props.classes.map(function (currClass) {
    return _jsx(_Grid2.default, {
      item: true,
      xs: 12,
      sm: 6
    }, void 0, _jsx(_ClassItem2.default, {
      classItem: currClass
    }));
  }));
}

exports.default = ClassList;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _React = __webpack_require__(74);

var _React2 = _interopRequireDefault(_React);

var _Card = __webpack_require__(75);

var _Card2 = _interopRequireDefault(_Card);

var _CardActionArea = __webpack_require__(76);

var _CardActionArea2 = _interopRequireDefault(_CardActionArea);

var _CardActions = __webpack_require__(77);

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(78);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = __webpack_require__(79);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(19);

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = __webpack_require__(87);

var _reactRouter = __webpack_require__(4);

var _ClassItem = {
  "card": "_3k0TEQGzfbXFPIxbLouVkK",
  "media": "_1cX_gA1ZufuIKoaHOoGMhO"
};

var _ClassItem2 = _interopRequireDefault(_ClassItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_Typography2.default, {
  component: 'p'
}, void 0, 'Sunday - 8:00PM - 9:00PM');

function ClassItem(props) {
  return _jsx(_Card2.default, {
    elevation: 24,
    className: _ClassItem2.default.card
  }, void 0, _jsx(_CardActionArea2.default, {}, void 0, _jsx(_CardMedia2.default, {
    className: _ClassItem2.default.media,
    image: 'https://res.cloudinary.com/gavinching/image/upload/q_80/v1543037858/Classroom_Lighting_yynd7x.jpg',
    title: 'Contemplative Reptile'
  }), _jsx(_CardContent2.default, {}, void 0, _jsx(_Typography2.default, {
    gutterBottom: true,
    variant: 'h5',
    component: 'h2'
  }, void 0, props.classItem.name), _ref)), _jsx(_CardActions2.default, {}, void 0, _jsx(_Button2.default, {
    size: 'small',
    color: 'primary'
  }, void 0, _jsx(_reactRouter.Link, {
    to: '/classes/342'
  }, void 0, 'View More'))));
}

exports.default = ClassItem;

/***/ })

};;