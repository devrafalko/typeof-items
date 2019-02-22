import type from 'of-type';

class TypeofItems {
  constructor(getArray, getExpectedTypes, callbackFunction) {
    if (!type(getArray, Array)) throw new TypeError('typeof-items: The [0] argument must be of type [Array].');
    if (arguments.length === 1) throw new TypeError('typeof-items: The [1] argument must be defined with the expected type.');
    let valid = true;
    for (let index = 0; index < getArray.length; index++) {
      let item = getArray[index];
      if (!type(item, getExpectedTypes)) {
        let actual = this.getActualType(item);
        let types = this.getExpectedTypes(getExpectedTypes);
        let textActual = `[${actual}] ${types.addons}value`;
        let textExpected = types.message;
        let message = `Invalid [${index}] item. The ${textActual} has been assigned, while the ${textExpected} is expected.`;
        if (type(callbackFunction, Function)) {
          callbackFunction({ index, actual, expected: types.expected, message, textActual, textExpected });
          valid = false;
          break;
        } else {
          throw new TypeError(message);
        }
      }
    }
    return () => valid;
  }

  getActualType(actualValue) {
    if (type(actualValue, null)) return 'null';
    if (type(actualValue, undefined)) return 'undefined';
    if (type(actualValue, 'arguments')) return 'arguments';
    return actualValue.constructor.name;
  }

  getExpectedTypes(expectedType) {
    const _types = ['whenString', 'whenRegExp', 'whenObject', 'whenArray'];
    for (let _type of _types) {
      let check = this[_type](expectedType);
      if (check) return check;
    }
    throw new TypeError('typeof-items: The expected type is not callable.');
  }

  whenString(stringType) {
    if (!type(stringType, String)) return null;
    const msg = `value of type matching string expression "${stringType}"`;
    let truthness = '', objectable = '';
    stringType.split('|').forEach((i) => {
      if (i.toLowerCase() === 'truthy') truthness = '<<falsy>> ';
      if (i.toLowerCase() === 'falsy') truthness = '<<truthy>> ';
      if (i.toLowerCase() === 'objectable') objectable = '<<non-objectable>> ';
    });
    return { message: msg, addons: truthness + objectable, expected: stringType };
  }

  whenRegExp(regType) {
    if (!type(regType, RegExp)) return null;
    const msg = `value of type matching regular expression ${regType}`;
    return { message: msg, addons: addons(regType), expected: regType.toString() };

    function addons(regType) {
      const isCaseInsensitive = regType.flags.match(/i/);
      let str = regType.toString();
      str = isCaseInsensitive ? str.toLowerCase() : str;
      let truthness = '', objectable = '';
      if (str.match(/truthy/)) truthness = '<<falsy>> ';
      if (str.match(/falsy/)) truthness = '<<truthy>> ';
      if (str.match(/objectable/)) objectable = '<<non-objectable>> ';
      return truthness + objectable;
    }
  }

  whenObject(objectType) {
    if (type(objectType, null)) return { message: 'value of type [null]', addons: '', expected: 'null' };
    if (type(objectType, undefined)) return { message: 'value of type [undefined]', addons: '', expected: 'undefined' };
    if (type(objectType, Function)) return { message: `value of type [${objectType.name}]`, addons: '', expected: objectType.name };
    return null;
  }

  whenArray(arrayTypes) {
    if (!type(arrayTypes, Array)) return null;
    const types = {};
    for (let _type of arrayTypes) {
      let exp = this.whenObject(_type);
      if (type(exp, null)) return null;
      types[exp.expected] = exp.expected;
    }
    const expected = Object.getOwnPropertyNames(types).join('|');
    return { message: `value of type [${expected}]`, addons: '', expected: expected };
  }
}

export default function typeofItems() {
  return new TypeofItems(...arguments)();
}