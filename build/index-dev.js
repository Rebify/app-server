/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_http_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/http-config */ \"./config/http-config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n__webpack_require__(/*! ./config/db */ \"./config/db.js\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()({\n  origin: ['https://localhost:4200', 'http://localhost:4200'],\n  credentials: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"json\"]());\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"urlencoded\"]({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]); // catch 404 and forward to error handler\n\napp.use(function (req, res, next) {\n  next(http_errors__WEBPACK_IMPORTED_MODULE_1___default()(404));\n}); // error handler\n\napp.use(function (err, req, res) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render('error');\n});\nObject(_config_http_config__WEBPACK_IMPORTED_MODULE_5__[\"createServer\"])(app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/rebify';\nmongoose.connect(DB_URI, {\n  useNewUrlParser: true,\n  dbName: 'rebify'\n}, function () {}).then(function () {\n  return console.info(\"Correctly connected to the database: \".concat(DB_URI));\n})[\"catch\"](function (error) {\n  return console.error(\"There was an error when trying to connect to the database: \".concat(DB_URI), error);\n});\n\n//# sourceURL=webpack:///./config/db.js?");

/***/ }),

/***/ "./config/http-config.js":
/*!*******************************!*\
  !*** ./config/http-config.js ***!
  \*******************************/
/*! exports provided: createServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createServer\", function() { return createServer; });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable prefer-template */\n\nvar _process$env$PORT = process.env.PORT,\n    PORT = _process$env$PORT === void 0 ? 3000 : _process$env$PORT;\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\n\nfunction onListening(server) {\n  var addr = server.address();\n  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  console.log('Listening on ' + bind);\n}\n\nfunction createServer(app) {\n  var server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(app);\n  server.listen(PORT);\n  server.on('error', onError);\n  server.on('listening', function () {\n    return onListening(server);\n  });\n}\n\n//# sourceURL=webpack:///./config/http-config.js?");

/***/ }),

/***/ "./middleware/isAuthenticated.js":
/*!***************************************!*\
  !*** ./middleware/isAuthenticated.js ***!
  \***************************************/
/*! exports provided: isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAuthenticated\", function() { return isAuthenticated; });\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/jwt */ \"./utils/jwt.js\");\n\n\nvar isAuthenticated = function isAuthenticated(req, res, next) {\n  var token = req.headers.authorization;\n  Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_1__[\"verifyToken\"])(token, function (err) {\n    if (err) {\n      throw http_errors__WEBPACK_IMPORTED_MODULE_0___default()('Invalid token', 403);\n    }\n\n    next();\n  });\n};\n\n//# sourceURL=webpack:///./middleware/isAuthenticated.js?");

/***/ }),

/***/ "./models/Menu.js":
/*!************************!*\
  !*** ./models/Menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar menuSchema = new Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  userId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n    ref: 'User',\n    required: true\n  }\n}, {\n  timestamps: true,\n  toJSON: {\n    virtuals: true,\n    transform: function transform(doc, ret) {\n      ret.id = doc._id;\n      delete ret._id;\n      delete ret.__v;\n      return ret;\n    }\n  }\n});\nmenuSchema.virtual('dishes', {\n  ref: 'Dish',\n  localField: '_id',\n  foreignField: 'menuId'\n});\nvar Menu = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Menu', menuSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./models/Menu.js?");

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar userSchema = new Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true,\n  toJSON: {\n    virtuals: true,\n    transform: function transform(doc, ret) {\n      ret.id = doc._id;\n      delete ret._id;\n      delete ret.__v;\n      delete ret.password;\n      return ret;\n    }\n  }\n});\nuserSchema.virtual('menus', {\n  ref: 'Menu',\n  localField: '_id',\n  foreignField: 'userId'\n});\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./models/User.js?");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./models/User.js\");\n/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/jwt */ \"./utils/jwt.js\");\n/* harmony import */ var _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middleware/isAuthenticated */ \"./middleware/isAuthenticated.js\");\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/signup', function (req, res) {\n  try {\n    var _req$body = req.body,\n        email = _req$body.email,\n        password = _req$body.password;\n    _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      email: email\n    }).then(function (user) {\n      if (user) {\n        return res.status(400).json({\n          error: 'This email address is already registered.'\n        });\n      }\n\n      var newUser = new _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        email: email,\n        password: password\n      });\n      bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10, function (err, salt) {\n        if (err) {\n          throw err;\n        }\n\n        bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(newUser.password, salt, function (error, hash) {\n          if (error) throw error;\n          newUser.password = hash;\n          newUser.save().then(function (createdUser) {\n            return res.status(200).json(createdUser);\n          })[\"catch\"](function (userErr) {\n            return res.status(400).json(userErr);\n          });\n        });\n      });\n    });\n  } catch (error) {\n    return res.status(500).json(error);\n  }\n});\nrouter.post('/login', function (req, res) {\n  try {\n    var _req$body2 = req.body,\n        email = _req$body2.email,\n        password = _req$body2.password;\n    _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      email: email\n    }).then(function (user) {\n      if (!user) {\n        return res.status(404).json({\n          error: 'No account associated with this email was found'\n        });\n      }\n\n      bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password).then(function (isMatch) {\n        if (isMatch) {\n          var tokenCallback = function tokenCallback(err, token) {\n            if (err) {\n              return res.status(500).json({\n                error: 'Error signing token',\n                raw: err\n              });\n            }\n\n            return res.status(200).json({\n              success: true,\n              token: token\n            });\n          };\n\n          var payload = {\n            id: user._id\n          };\n          Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_3__[\"signToken\"])(payload, tokenCallback);\n        } else {\n          return res.status(400).json({\n            error: 'The introduced password is incorrect'\n          });\n        }\n      });\n    });\n  } catch (error) {\n    return res.status(500).json(error);\n  }\n});\nrouter.get('/verify-token', _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_4__[\"isAuthenticated\"], function (req, res) {\n  return res.status(200).json({\n    message: 'The token is valid'\n  });\n});\nrouter.get('/decode-token', _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_4__[\"isAuthenticated\"], function (req, res) {\n  var token = req.headers.authorization;\n\n  try {\n    var _decodeToken = Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_3__[\"decodeToken\"])(token),\n        id = _decodeToken.id;\n\n    console.log(\"The user id is: \".concat(id));\n    return res.status(200).json({\n      message: 'The token could be decoded'\n    });\n  } catch (error) {\n    return res.json(401).json({\n      error: 'The token could not be decoded'\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/auth.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./routes/auth.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./routes/menu.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/ping', function (req, res) {\n  res.status(200).json({});\n});\nrouter.use('/auth', _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/menu', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/menu.js":
/*!************************!*\
  !*** ./routes/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./models/User.js\");\n/* harmony import */ var _models_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Menu */ \"./models/Menu.js\");\n/* harmony import */ var _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/isAuthenticated */ \"./middleware/isAuthenticated.js\");\n/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/jwt */ \"./utils/jwt.js\");\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_3__[\"isAuthenticated\"], function (req, res) {\n  var token = req.headers.authorization;\n\n  var _decodeToken = Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_4__[\"decodeToken\"])(token),\n      id = _decodeToken.id;\n\n  _models_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n    userId: id\n  }).then(function (menus) {\n    return res.status(200).json({\n      menus: menus\n    });\n  })[\"catch\"](function (err) {\n    return res.status(400).json(err);\n  });\n});\nrouter.post('/createMenu', _middleware_isAuthenticated__WEBPACK_IMPORTED_MODULE_3__[\"isAuthenticated\"], function (req, res, next) {\n  var token = req.headers.authorization;\n\n  var _decodeToken2 = Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_4__[\"decodeToken\"])(token),\n      id = _decodeToken2.id;\n\n  _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id).then(function () {\n    var name = req.body.name;\n    var newMenu = new _models_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      name: name,\n      userId: id\n    });\n    newMenu.save().then(function () {\n      return res.status(201).json(newMenu);\n    })[\"catch\"](next);\n  })[\"catch\"](function (err) {\n    return res.status(400).json(err);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/menu.js?");

/***/ }),

/***/ "./utils/jwt.js":
/*!**********************!*\
  !*** ./utils/jwt.js ***!
  \**********************/
/*! exports provided: privateSecret, publicSecret, tokenSignInOptions, signToken, getTokenWithoutBearer, verifyToken, decodeToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"privateSecret\", function() { return privateSecret; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"publicSecret\", function() { return publicSecret; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tokenSignInOptions\", function() { return tokenSignInOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signToken\", function() { return signToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTokenWithoutBearer\", function() { return getTokenWithoutBearer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyToken\", function() { return verifyToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decodeToken\", function() { return decodeToken; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n // These should be a pair that can be generated through an online RSA key generator\n// a recommended size of 512 bits would be really strong.\n\nvar privateSecret = process.env.PRIVATE_SECRET || 'Dev secret';\nvar publicSecret = process.env.PUBLIC_SECRET || 'Dev secret';\nvar tokenSignInOptions = {\n  issuer: process.env.TOKEN_ISSUER || 'RebifyApp',\n  audience: process.env.TOKEN_AUDIENCE || \"http://localhost:\".concat(process.env.PORT || 3000),\n  expiresIn: process.env.TOKEN_EXPIRATION || '1d',\n  algorithm: 'HS256'\n};\nvar signToken = function signToken(payload, callback) {\n  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, privateSecret, tokenSignInOptions, callback);\n};\nvar getTokenWithoutBearer = function getTokenWithoutBearer(token) {\n  return token && token.includes('Bearer') ? token.split(' ')[1] : token;\n};\nvar verifyToken = function verifyToken(token, callback) {\n  var tokenWithoutBearer = getTokenWithoutBearer(token);\n  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(tokenWithoutBearer, publicSecret, tokenSignInOptions, callback);\n};\nvar decodeToken = function decodeToken(token) {\n  try {\n    var tokenWithoutBearer = getTokenWithoutBearer(token);\n    var decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(tokenWithoutBearer, {\n      complete: true\n    });\n    var payload = decoded.payload;\n    return payload;\n  } catch (error) {\n    return error;\n  }\n};\n\n//# sourceURL=webpack:///./utils/jwt.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ })

/******/ });