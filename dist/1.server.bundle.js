exports.ids = [1];
exports.modules = {

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(9);

var _BannerImage = __webpack_require__(90);

var _BannerImage2 = _interopRequireDefault(_BannerImage);

var _Paper = __webpack_require__(81);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(19);

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = __webpack_require__(72);

var _Grid2 = _interopRequireDefault(_Grid);

var _Tabs = __webpack_require__(82);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(83);

var _Tab2 = _interopRequireDefault(_Tab);

var _styles = __webpack_require__(21);

var _Avatar = __webpack_require__(84);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chip = __webpack_require__(85);

var _Chip2 = _interopRequireDefault(_Chip);

var _FastFood = __webpack_require__(86);

var _FastFood2 = _interopRequireDefault(_FastFood);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: _extends({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2

    }),
    hehe: _extends({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }),
    title: {
      textAlign: 'center'
    },
    tabs: {
      backgroundColor: '#2196f3'
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 60,
      height: 60
    },
    chip: {
      margin: theme.spacing.unit,
      backgroundColor: '#2196f3'
    }
  };
};

// Import Style
//import styles from './Class.css';

var _ref = _jsx(_Grid2.default, {
  item: true
}, void 0, _jsx(_BannerImage2.default, {
  src: 'https://res.cloudinary.com/gavinching/image/upload/q_80/v1543043466/All_Lights_hpavhm.png'
}));

var _ref2 = _jsx(_Typography2.default, {
  component: 'p'
}, void 0, 'Sunday - 8:00PM - 9:00PM');

var _ref3 = _jsx(_Typography2.default, {
  component: 'p'
}, void 0, 'John Doe');

var _ref4 = _jsx(_Tab2.default, {
  label: 'Attendance'
});

var _ref5 = _jsx(_Tab2.default, {
  label: 'Students'
});

var _ref6 = _jsx(_Grid2.default, {
  item: true,
  xs: 12,
  sm: true,
  container: true,
  direction: 'column'
}, void 0, _jsx(_Typography2.default, {
  component: 'p'
}, void 0, 'John Cena'));

var _ref7 = _jsx(_Avatar2.default, {}, void 0, _jsx(_FastFood2.default, {}));

var _ref8 = _jsx(_Chip2.default, {
  label: 'Needs EpiPen',
  color: 'secondary',
  avatar: _jsx(_Avatar2.default, {}, void 0, '!')
});

var _ref9 = _jsx(_Grid2.default, {
  item: true,
  xs: 12,
  sm: true,
  container: true,
  direction: 'column'
}, void 0, _jsx(_Typography2.default, {
  component: 'p'
}, void 0, 'Whalvana Lee'));

var _ref10 = _jsx(_Avatar2.default, {}, void 0, _jsx(_FastFood2.default, {}));

var _ref11 = _jsx(_Avatar2.default, {}, void 0, _jsx(_FastFood2.default, {}));

var ClassDetailPage = function (_Component) {
  _inherits(ClassDetailPage, _Component);

  function ClassDetailPage() {
    _classCallCheck(this, ClassDetailPage);

    return _possibleConstructorReturn(this, (ClassDetailPage.__proto__ || Object.getPrototypeOf(ClassDetailPage)).apply(this, arguments));
  }

  _createClass(ClassDetailPage, [{
    key: 'render',
    value: function render() {
      // Banner image
      // Paper Detail
      //Tabs
      // Attendance
      // Students

      return _jsx('div', {}, void 0, _jsx(_Paper2.default, {}, void 0, _jsx(_Grid2.default, {
        container: true,
        spacing: 24,
        className: this.props.classes.root,
        direction: 'row'
      }, void 0, _ref, _jsx(_Grid2.default, {
        item: true,
        xs: 12,
        sm: true
      }, void 0, _jsx(_Typography2.default, {
        gutterBottom: true,
        variant: 'h5',
        component: 'h2'
      }, void 0, this.props.class.name), _ref2, _ref3)), _jsx(_Tabs2.default, {
        className: this.props.classes.tabs,
        centered: true,
        value: 0,
        onChange: function onChange() {}
      }, void 0, _ref4, _ref5), _jsx(_Grid2.default, {
        className: this.props.classes.hehe,
        container: true,
        spacing: 24,
        direction: 'column'
      }, void 0, _jsx(_Grid2.default, {
        item: true
      }, void 0, _jsx(_Paper2.default, {}, void 0, _jsx(_Grid2.default, {
        container: true,
        spacing: 24,
        className: this.props.classes.root,
        alignItems: 'center',
        alignContent: 'center'
      }, void 0, _jsx(_Grid2.default, {
        item: true
      }, void 0, _jsx(_Avatar2.default, {
        alt: 'Adelle Charles',
        src: 'https://res.cloudinary.com/gavinching/image/upload/q_80/v1543089208/uxceo-128_n0vz7r.jpg',
        className: this.props.classes.avatar
      })), _ref6), _jsx('div', {
        className: this.props.classes.root
      }, void 0, _jsx(_Chip2.default, {
        className: this.props.classes.chip,
        label: 'Peanuts',
        color: 'primary',
        avatar: _ref7
      }), _ref8))), _jsx(_Grid2.default, {
        item: true
      }, void 0, _jsx(_Paper2.default, {}, void 0, _jsx(_Grid2.default, {
        container: true,
        spacing: 24,
        className: this.props.classes.root,
        alignItems: 'center',
        alignContent: 'center'
      }, void 0, _jsx(_Grid2.default, {
        item: true
      }, void 0, _jsx(_Avatar2.default, {
        alt: 'Adelle Charles',
        src: 'https://res.cloudinary.com/gavinching/image/upload/q_80/v1543089208/uxceo-128_n0vz7r.jpg',
        className: this.props.classes.avatar
      })), _ref9), _jsx('div', {
        className: this.props.classes.root
      }, void 0, _jsx(_Chip2.default, {
        className: this.props.classes.chip,
        label: 'Pizza',
        color: 'primary',
        avatar: _ref10
      }), _jsx(_Chip2.default, {
        className: this.props.classes.chip,
        label: 'Cheese',
        color: 'primary',
        avatar: _ref11
      })))))));
    }
  }]);

  return ClassDetailPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    class: {
      name: "LA Intermediate 5"
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(ClassDetailPage));

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BannerImage = {
  "bannerImage": "_2IQ6t3xL8lVpcwRb-x65rb"
};

var _BannerImage2 = _interopRequireDefault(_BannerImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BannerImage(props) {
  return _jsx('img', {
    src: props.src,
    className: _BannerImage2.default.bannerImage
  });
}

exports.default = BannerImage;

/***/ })

};;