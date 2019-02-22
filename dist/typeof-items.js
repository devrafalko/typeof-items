var typeofItems=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports,__webpack_require__){(function(global){module.exports=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}__webpack_require__.r(__webpack_exports__);var _g=function(){return global||window}.bind(void 0),OfType=function(){function OfType(){!function(instance,Constructor){if(!(instance instanceof OfType))throw new TypeError("Cannot call a class as a function")}(this);var _this=this;return function(value,type){return _this._setInitials(arguments,value,type),_this._validate()}}var Constructor,protoProps;return Constructor=OfType,(protoProps=[{key:"_setInitials",value:function(_arguments,value,type){this._arguments=_arguments,this._value=value,this._type=type}},{key:"_validate",value:function(){return!!this.isTypeDefined&&(this.isTypeNull?this.isValueNull:this.isTypeUndefined?void 0===this._value:this.isTypeFunction?this._typeConstructor():this.isTypeArray?this._typeArray():this.isTypeString?this._typeString():!!this.isTypeRegExp&&this._typeRegexp())}},{key:"_typeConstructor",value:function(){return!this.isValueUndefined&&!this.isValueNull&&Object.getPrototypeOf(this._value).constructor.name===this._type.name}},{key:"_typeArray",value:function(){if(!this._type.length)return!0;var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=this._type[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var t=_step.value;if(null===t&&this.isValueNull)return!0;if(void 0===t&&this.isValueUndefined)return!0;if(!this.isValueNull&&!this.isValueUndefined&&null!==t&&void 0!==t&&Object.getPrototypeOf(this._value).constructor.name===t.name)return!0}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return!1}},{key:"_typeString",value:function(){var _this2=this,typeList=this._type.toLowerCase().split("|");if(1===typeList.length&&""===typeList[0]||typeList.some(function(i){return"any"===i}))return!0;if(typeList.some(function(i){return"truthy"===i})&&this._value)return!0;if(typeList.some(function(i){return"falsy"===i})&&!this._value)return!0;if(this.isValueUndefined&&typeList.some(function(i){return"undefined"===i}))return!0;if(this.isValueNull&&typeList.some(function(i){return"null"===i}))return!0;if(this.isValueNull||void 0===this._value)return!1;var valueConstructor=Object.getPrototypeOf(this._value).constructor;return!!(this.argumentsRegExp.test(this._value.toString())&&valueConstructor&&"Object"===valueConstructor.name&&typeList.some(function(i){return"arguments"===i}))||!!(typeList.some(function(i){return"instance"===i})&&this.isValueObject&&valueConstructor&&valueConstructor!==_g()[valueConstructor.name])||!(!typeList.some(function(i){return"objectable"===i})||!this.isObjectInstance)||typeList.some(function(i){return i===Object.getPrototypeOf(_this2._value).constructor.name.toLowerCase()})}},{key:"_typeRegexp",value:function(){if(this._exec("any")||this._type.test(""))return!0;if(this._exec("truthy")&&this._value)return!0;if(this._exec("falsy")&&!this._value)return!0;if(this._type.test("undefined")&&this.isValueUndefined)return!0;if(this._type.test("null")&&this.isValueNull)return!0;if(this.isValueNull||void 0===this._value)return!1;var valueConstructor=Object.getPrototypeOf(this._value).constructor;return!!(this._exec("arguments")&&valueConstructor&&"Object"===valueConstructor.name&&this.argumentsRegExp.test(this._value.toString()))||!!(this._exec("instance")&&this.isValueObject&&valueConstructor&&valueConstructor!==_g()[valueConstructor.name])||!(!this._exec("objectable")||!this.isObjectInstance)||this._type.test(Object.getPrototypeOf(this._value).constructor.name)}},{key:"_exec",value:function(name){var _exec=this._type.exec(name);return null!==_exec&&_exec[0]===name}},{key:"isTypeDefined",get:function(){return this._arguments.length>=2}},{key:"isTypeString",get:function(){return"string"==typeof this._type}},{key:"isTypeFunction",get:function(){return"function"==typeof this._type}},{key:"isTypeUndefined",get:function(){return void 0===this._type}},{key:"isValueUndefined",get:function(){return void 0===this._value}},{key:"isTypeNull",get:function(){return null===this._type}},{key:"isValueNull",get:function(){return null===this._value}},{key:"isValueObject",get:function(){return"object"===_typeof(this._value)}},{key:"isObjectInstance",get:function(){return this._value instanceof Object}},{key:"isTypeArray",get:function(){return!this.isTypeNull&&"object"===_typeof(this._type)&&"Array"===this._type.constructor.name}},{key:"isTypeRegExp",get:function(){return this._type&&"RegExp"===this._type.constructor.name}},{key:"argumentsRegExp",get:function(){return/^\[object Arguments\]$/i}}])&&_defineProperties(Constructor.prototype,protoProps),OfType}();__webpack_exports__.default=new OfType}]).default}).call(this,__webpack_require__(2))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return typeofItems});var of_type__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),of_type__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(of_type__WEBPACK_IMPORTED_MODULE_0__);function _construct(Parent,args,Class){return(_construct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TypeofItems=function(){function TypeofItems(getArray,getExpectedTypes,callbackFunction){if(function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TypeofItems),!of_type__WEBPACK_IMPORTED_MODULE_0___default()(getArray,Array))throw new TypeError("typeof-items: The [0] argument must be of type [Array].");if(1===arguments.length)throw new TypeError("typeof-items: The [1] argument must be defined with the expected type.");for(var valid=!0,index=0;index<getArray.length;index++){var item=getArray[index];if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(item,getExpectedTypes)){var actual=this.getActualType(item),types=this.getExpectedTypes(getExpectedTypes),textActual="[".concat(actual,"] ").concat(types.addons,"value"),textExpected=types.message,message="Invalid [".concat(index,"] item. The ").concat(textActual," has been assigned, while the ").concat(textExpected," is expected.");if(of_type__WEBPACK_IMPORTED_MODULE_0___default()(callbackFunction,Function)){callbackFunction({index:index,actual:actual,expected:types.expected,message:message,textActual:textActual,textExpected:textExpected}),valid=!1;break}throw new TypeError(message)}}return function(){return valid}}var Constructor,protoProps,staticProps;return Constructor=TypeofItems,(protoProps=[{key:"getActualType",value:function(actualValue){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,null)?"null":of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,void 0)?"undefined":of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,"arguments")?"arguments":actualValue.constructor.name}},{key:"getExpectedTypes",value:function(expectedType){for(var _types=["whenString","whenRegExp","whenObject","whenArray"],_i=0;_i<_types.length;_i++){var check=this[_types[_i]](expectedType);if(check)return check}throw new TypeError("typeof-items: The expected type is not callable.")}},{key:"whenString",value:function(stringType){if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(stringType,String))return null;var msg='value of type matching string expression "'.concat(stringType,'"'),truthness="",objectable="";return stringType.split("|").forEach(function(i){"truthy"===i.toLowerCase()&&(truthness="<<falsy>> "),"falsy"===i.toLowerCase()&&(truthness="<<truthy>> "),"objectable"===i.toLowerCase()&&(objectable="<<non-objectable>> ")}),{message:msg,addons:truthness+objectable,expected:stringType}}},{key:"whenRegExp",value:function(regType){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(regType,RegExp)?{message:"value of type matching regular expression ".concat(regType),addons:function(regType){var isCaseInsensitive=regType.flags.match(/i/),str=regType.toString(),truthness="",objectable="";(str=isCaseInsensitive?str.toLowerCase():str).match(/truthy/)&&(truthness="<<falsy>> ");str.match(/falsy/)&&(truthness="<<truthy>> ");str.match(/objectable/)&&(objectable="<<non-objectable>> ");return truthness+objectable}(regType),expected:regType.toString()}:null}},{key:"whenObject",value:function(objectType){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,null)?{message:"value of type [null]",addons:"",expected:"null"}:of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,void 0)?{message:"value of type [undefined]",addons:"",expected:"undefined"}:of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,Function)?{message:"value of type [".concat(objectType.name,"]"),addons:"",expected:objectType.name}:null}},{key:"whenArray",value:function(arrayTypes){if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(arrayTypes,Array))return null;var types={},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=arrayTypes[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var _type=_step.value,exp=this.whenObject(_type);if(of_type__WEBPACK_IMPORTED_MODULE_0___default()(exp,null))return null;types[exp.expected]=exp.expected}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}var expected=Object.getOwnPropertyNames(types).join("|");return{message:"value of type [".concat(expected,"]"),addons:"",expected:expected}}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),TypeofItems}();function typeofItems(){return _construct(TypeofItems,Array.prototype.slice.call(arguments))()}},function(module,exports){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}module.exports=g}]).default;