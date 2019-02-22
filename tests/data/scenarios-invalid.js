class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Diet {
  constructor(calories, weight) {
    this.weight = weight;
    this.calories = calories;
  }
}

export default [
  {
    array: ['Nikola', 'Albert', null, 'Thomas'],
    actual: 'null',
    expected: 'string',
    oArray: "['Nikola', 'Albert', null, 'Thomas']",
    oExpected: 'string',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [null] value has been assigned, while the value of type matching string expression "string" is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching string expression "string"'
  },
  {
    array: [{}, 'Nikola', 'Albert', 'Thomas'],
    actual: 'Object',
    expected: 'STRING',
    oArray: "[{}, 'Nikola', 'Albert', 'Thomas']",
    oExpected: 'STRING',
    oIndex: 0,
    oMessage: 'Invalid [0] item. The [Object] value has been assigned, while the value of type matching string expression "STRING" is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type matching string expression "STRING"'
  },
  {
    array: [10, 20.55, .33, undefined],
    actual: 'undefined',
    expected: 'number',
    oArray: "[10, 20.55, .33, undefined]",
    oExpected: 'number',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [undefined] value has been assigned, while the value of type matching string expression "number" is expected.',
    oTextActual: '[undefined] value',
    oTextExpected: 'value of type matching string expression "number"'
  },
  {
    array: [[1, 2, 3], false, ['Nikola', 'Albert', 'Thomas'], { names: ['Nikola', 'Albert', 'Thomas'] }, [], {}],
    actual: 'Boolean',
    expected: 'array|object',
    oArray: "[[1, 2, 3], false, ['Nikola', 'Albert', 'Thomas'], { names: ['Nikola', 'Albert', 'Thomas'] }, [], {}]",
    oExpected: 'array|object',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [Boolean] value has been assigned, while the value of type matching string expression "array|object" is expected.',
    oTextActual: '[Boolean] value',
    oTextExpected: 'value of type matching string expression "array|object"'
  },
  {
    array: [null, undefined, null, undefined, new Diet(2400, 88)],
    actual: 'Diet',
    expected: 'null|undefined',
    oArray: "[null, undefined, null, undefined, new Diet(2400, 88)]",
    oExpected: 'null|undefined',
    oIndex: 4,
    oMessage: 'Invalid [4] item. The [Diet] value has been assigned, while the value of type matching string expression "null|undefined" is expected.',
    oTextActual: '[Diet] value',
    oTextExpected: 'value of type matching string expression "null|undefined"'
  },
  {
    array: [true, false, 'Nikola', 'Albert', 'Thomas', 10, 20, new Date()],
    actual: 'Date',
    expected: 'boolean|string|number',
    oArray: "[true, false, 'Nikola', 'Albert', 'Thomas', 10, 20, new Date()]",
    oExpected: 'boolean|string|number',
    oIndex: 7,
    oMessage: 'Invalid [7] item. The [Date] value has been assigned, while the value of type matching string expression "boolean|string|number" is expected.',
    oTextActual: '[Date] value',
    oTextExpected: 'value of type matching string expression "boolean|string|number"'
  },
  {
    array: [/hello/, /world/, new TypeError(), new SyntaxError(), new Error()],
    actual: 'SyntaxError',
    expected: 'RegExp|Error|typeerror',
    oArray: "[/hello/, /world/, new TypeError(), new SyntaxError(), new Error()]",
    oExpected: 'RegExp|Error|typeerror',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [SyntaxError] value has been assigned, while the value of type matching string expression "RegExp|Error|typeerror" is expected.',
    oTextActual: '[SyntaxError] value',
    oTextExpected: 'value of type matching string expression "RegExp|Error|typeerror"'
  },
  {
    array: ['Nikola', 'Albert', 'Thomas', Diet],
    actual: 'Function',
    expected: /string/i,
    oArray: "['Nikola', 'Albert', 'Thomas', Diet]",
    oExpected: '/string/i',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [Function] value has been assigned, while the value of type matching regular expression /string/i is expected.',
    oTextActual: '[Function] value',
    oTextExpected: 'value of type matching regular expression /string/i'
  },
  {
    array: [10, 5.55, .2, []],
    actual: 'Array',
    expected: /Number/i,
    oArray: "[10, 5.55, .2, []]",
    oExpected: '/Number/i',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [Array] value has been assigned, while the value of type matching regular expression /Number/i is expected.',
    oTextActual: '[Array] value',
    oTextExpected: 'value of type matching regular expression /Number/i'
  },
  {
    array: [[], {}, ['Nikola', 'Albert', 'Thomas'], () => { }, { names: ['Nikola', 'Albert', 'Thomas'] }],
    actual: 'Function',
    expected: /array|object/i,
    oArray: "[[], {}, ['Nikola', 'Albert', 'Thomas'], ()=>{}, { names: ['Nikola', 'Albert', 'Thomas'] }]",
    oExpected: '/array|object/i',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [Function] value has been assigned, while the value of type matching regular expression /array|object/i is expected.',
    oTextActual: '[Function] value',
    oTextExpected: 'value of type matching regular expression /array|object/i'
  },
  {
    array: ['Nikola', null, 'Albert', null, 'Thomas', null, 0],
    actual: 'Number',
    expected: /(String|null)/,
    oArray: "['Nikola', null, 'Albert', null, 'Thomas', null, 0]",
    oExpected: '/(String|null)/',
    oIndex: 6,
    oMessage: 'Invalid [6] item. The [Number] value has been assigned, while the value of type matching regular expression /(String|null)/ is expected.',
    oTextActual: '[Number] value',
    oTextExpected: 'value of type matching regular expression /(String|null)/'
  },
  {
    array: [{}, 'Nikola', undefined, 'Albert', undefined, 'Thomas', undefined],
    actual: 'Object',
    expected: /(string|undefined)/i,
    oArray: "[{}, 'Nikola', undefined, 'Albert', undefined, 'Thomas', undefined]",
    oExpected: '/(string|undefined)/i',
    oIndex: 0,
    oMessage: 'Invalid [0] item. The [Object] value has been assigned, while the value of type matching regular expression /(string|undefined)/i is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type matching regular expression /(string|undefined)/i'
  },
  {
    array: [new Error(), new String(), new TypeError()],
    actual: 'String',
    expected: /Error/,
    oArray: "[new Error(), new String(), new TypeError()]",
    oExpected: '/Error/',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [String] value has been assigned, while the value of type matching regular expression /Error/ is expected.',
    oTextActual: '[String] value',
    oTextExpected: 'value of type matching regular expression /Error/'
  },
  {
    array: ['Nikola', 'Albert', 'Thomas', new TypeError()],
    actual: 'TypeError',
    expected: String,
    oArray: "['Nikola', 'Albert', 'Thomas', new TypeError()]",
    oExpected: 'String',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [TypeError] value has been assigned, while the value of type [String] is expected.',
    oTextActual: '[TypeError] value',
    oTextExpected: 'value of type [String]'
  },
  {
    array: [true, false, true, false, null],
    actual: 'null',
    expected: Boolean,
    oArray: "[true, false, true, false, null]",
    oExpected: 'Boolean',
    oIndex: 4,
    oMessage: 'Invalid [4] item. The [null] value has been assigned, while the value of type [Boolean] is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type [Boolean]'
  },
  {
    array: [new Diet(1400, 55), new Person('Albert', 44)],
    actual: 'Person',
    expected: Diet,
    oArray: "[new Diet(1400, 55), new Person('Albert', 44)]",
    oExpected: 'Diet',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [Person] value has been assigned, while the value of type [Diet] is expected.',
    oTextActual: '[Person] value',
    oTextExpected: 'value of type [Diet]'
  },
  {
    array: [undefined, undefined, false],
    actual: 'Boolean',
    expected: undefined,
    oArray: "[undefined, undefined, false]",
    oExpected: 'undefined',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Boolean] value has been assigned, while the value of type [undefined] is expected.',
    oTextActual: '[Boolean] value',
    oTextExpected: 'value of type [undefined]'
  },
  {
    array: [null, null, {}],
    actual: 'Object',
    expected: null,
    oArray: "[null, null, {}]",
    oExpected: 'null',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Object] value has been assigned, while the value of type [null] is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type [null]'
  },
  {
    array: ['Nikola', 20, 'Albert', 40, 'Thomas', Number],
    actual: 'Function',
    expected: [String, Number],
    oArray: "['Nikola', 20, 'Albert', 40, 'Thomas', Number]",
    oExpected: 'String|Number',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [Function] value has been assigned, while the value of type [String|Number] is expected.',
    oTextActual: '[Function] value',
    oTextExpected: 'value of type [String|Number]'
  },
  {
    array: [[], {}, null, ['Nikola', 'Albert', 'Thomas'], false, { names: ['Nikola', 'Albert', 'Thomas'] }],
    actual: 'Boolean',
    expected: [Array, Object, null],
    oArray: "[[], {}, null, ['Nikola', 'Albert', 'Thomas'], false, { names: ['Nikola', 'Albert', 'Thomas'] }]",
    oExpected: 'Array|Object|null',
    oIndex: 4,
    oMessage: 'Invalid [4] item. The [Boolean] value has been assigned, while the value of type [Array|Object|null] is expected.',
    oTextActual: '[Boolean] value',
    oTextExpected: 'value of type [Array|Object|null]'
  },
  {
    array: [new Person('Albert', 44), new Diet(2600, 75), {}],
    actual: 'Object',
    expected: [Person, Diet],
    oArray: "[new Person('Albert', 44), new Diet(2600, 75), {}]",
    oExpected: 'Person|Diet',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Object] value has been assigned, while the value of type [Person|Diet] is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type [Person|Diet]'
  },
  {
    array: [(function () { return arguments; })('Nikola', 'Albert', 'Thomas'), []],
    actual: 'Array',
    expected: 'arguments',
    oArray: "[(function () { return arguments; })('Nikola', 'Albert', 'Thomas'), []]",
    oExpected: 'arguments',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [Array] value has been assigned, while the value of type matching string expression "arguments" is expected.',
    oTextActual: '[Array] value',
    oTextExpected: 'value of type matching string expression "arguments"'
  },
  {
    array: [(function () { return arguments; })('Nikola', 'Albert', 'Thomas'), {}, ['Nikola', 'Albert', 'Thomas']],
    actual: 'Object',
    expected: 'arguments|array',
    oArray: "[(function () { return arguments; })('Nikola', 'Albert', 'Thomas'), {}, ['Nikola', 'Albert', 'Thomas']]",
    oExpected: 'arguments|array',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [Object] value has been assigned, while the value of type matching string expression "arguments|array" is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type matching string expression "arguments|array"'
  },
  {
    array: [null, null, [], (function () { return arguments; })('Nikola', 'Albert', 'Thomas')],
    actual: 'Array',
    expected: /arguments|null/,
    oArray: "[null, null, [], (function () { return arguments; })('Nikola', 'Albert', 'Thomas')]",
    oExpected: '/arguments|null/',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Array] value has been assigned, while the value of type matching regular expression /arguments|null/ is expected.',
    oTextActual: '[Array] value',
    oTextExpected: 'value of type matching regular expression /arguments|null/'
  },
  {
    array: [new Person('Albert', 44), {}, new Diet(2600, 75)],
    actual: 'Object',
    expected: 'instance',
    oArray: "[new Person('Albert', 44), {}, new Diet(2600, 75)]",
    oExpected: 'instance',
    oIndex: 1,
    oMessage: 'Invalid [1] item. The [Object] value has been assigned, while the value of type matching string expression "instance" is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type matching string expression "instance"'
  },
  {
    array: [[], ['Nikola', 'Albert', 'Thomas'], new Date(), new Person('Albert', 44), new Diet(2600, 75)],
    actual: 'Date',
    expected: 'instance|array',
    oArray: "[[], ['Nikola', 'Albert', 'Thomas'], new Date(), new Person('Albert', 44), new Diet(2600, 75)]",
    oExpected: 'instance|array',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Date] value has been assigned, while the value of type matching string expression "instance|array" is expected.',
    oTextActual: '[Date] value',
    oTextExpected: 'value of type matching string expression "instance|array"'
  },
  {
    array: [new Person('Albert', 44), new Diet(2600, 75), 'Nikola', String, 'Albert', 'Thomas'],
    actual: 'Function',
    expected: /instance|string/i,
    oArray: "[new Person('Albert', 44), new Diet(2600, 75), 'Nikola', String, 'Albert', 'Thomas']",
    oExpected: '/instance|string/i',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [Function] value has been assigned, while the value of type matching regular expression /instance|string/i is expected.',
    oTextActual: '[Function] value',
    oTextExpected: 'value of type matching regular expression /instance|string/i'
  },
  {
    array: [{}, [], new String('hello world'), 'hello world', new Person('Albert', 44), new Diet(2600, 75)],
    actual: 'String',
    expected: 'objectable|instance',
    oArray: "[{}, [], new String('hello world'), 'hello world', new Person('Albert', 44), new Diet(2600, 75)]",
    oExpected: 'objectable|instance',
    oIndex: 3,
    oMessage: 'Invalid [3] item. The [String] <<non-objectable>> value has been assigned, while the value of type matching string expression "objectable|instance" is expected.',
    oTextActual: '[String] <<non-objectable>> value',
    oTextExpected: 'value of type matching string expression "objectable|instance"'
  },
  {
    array: [{}, [], new Person('Albert', 44), new Diet(2600, 75), true, false, undefined],
    actual: 'undefined',
    expected: 'objectable|boolean',
    oArray: "[{}, [], new Person('Albert', 44), new Diet(2600, 75), true, false, undefined]",
    oExpected: 'objectable|boolean',
    oIndex: 6,
    oMessage: 'Invalid [6] item. The [undefined] <<non-objectable>> value has been assigned, while the value of type matching string expression "objectable|boolean" is expected.',
    oTextActual: '[undefined] <<non-objectable>> value',
    oTextExpected: 'value of type matching string expression "objectable|boolean"'
  },
  {
    array: [{}, [], new Person('Albert', 44), new Diet(2600, 75), function () { }, () => { }, Boolean, null],
    actual: 'null',
    expected: /objectable|Function/,
    oArray: "[{}, [], new Person('Albert', 44), new Diet(2600, 75), function () { }, () => { }, Boolean, null]",
    oExpected: '/objectable|Function/',
    oIndex: 7,
    oMessage: 'Invalid [7] item. The [null] <<non-objectable>> value has been assigned, while the value of type matching regular expression /objectable|Function/ is expected.',
    oTextActual: '[null] <<non-objectable>> value',
    oTextExpected: 'value of type matching regular expression /objectable|Function/'
  },
  {
    array: [1, true, {}, [], 'hello', 0],
    actual: 'Number',
    expected: 'truthy',
    oArray: "[1, true, {}, [], 'hello', 0]",
    oExpected: 'truthy',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [Number] <<falsy>> value has been assigned, while the value of type matching string expression "truthy" is expected.',
    oTextActual: '[Number] <<falsy>> value',
    oTextExpected: 'value of type matching string expression "truthy"'
  },
  {
    array: [0, 1, null, true, {}, [], 'hello'],
    actual: 'null',
    expected: 'truthy|number',
    oArray: "[0, 1, null, true, {}, [], 'hello']",
    oExpected: 'truthy|number',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [null] <<falsy>> value has been assigned, while the value of type matching string expression "truthy|number" is expected.',
    oTextActual: '[null] <<falsy>> value',
    oTextExpected: 'value of type matching string expression "truthy|number"'
  },
  {
    array: [1, 2, 3, new Number(0), new Boolean(false), 0],
    actual: 'Number',
    expected: 'truthy|objectable',
    oArray: "[1, 2, 3, new Number(0), new Boolean(false), 0]",
    oExpected: 'truthy|objectable',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [Number] <<falsy>> <<non-objectable>> value has been assigned, while the value of type matching string expression "truthy|objectable" is expected.',
    oTextActual: '[Number] <<falsy>> <<non-objectable>> value',
    oTextExpected: 'value of type matching string expression "truthy|objectable"'
  },
  {
    array: [1, 2, 3, new Number(0), new Boolean(false), null],
    actual: 'null',
    expected: /truthy|objectable/,
    oArray: "[1, 2, 3, new Number(0), new Boolean(false), null]",
    oExpected: '/truthy|objectable/',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [null] <<falsy>> <<non-objectable>> value has been assigned, while the value of type matching regular expression /truthy|objectable/ is expected.',
    oTextActual: '[null] <<falsy>> <<non-objectable>> value',
    oTextExpected: 'value of type matching regular expression /truthy|objectable/'
  },
  {
    array: [0, null, undefined, new Boolean(true), new Number(1), 'hello world'],
    actual: 'String',
    expected: 'falsy|objectable',
    oArray: "[0, null, undefined, new Boolean(true), new Number(1), 'hello world']",
    oExpected: 'falsy|objectable',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [String] <<truthy>> <<non-objectable>> value has been assigned, while the value of type matching string expression "falsy|objectable" is expected.',
    oTextActual: '[String] <<truthy>> <<non-objectable>> value',
    oTextExpected: 'value of type matching string expression "falsy|objectable"'
  },
  {
    array: [0, null, undefined, new Boolean(true), new Number(1), 'hello world'],
    actual: 'String',
    expected: /falsy|objectable/,
    oArray: "[0, null, undefined, new Boolean(true), new Number(1), 'hello world']",
    oExpected: '/falsy|objectable/',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [String] <<truthy>> <<non-objectable>> value has been assigned, while the value of type matching regular expression /falsy|objectable/ is expected.',
    oTextActual: '[String] <<truthy>> <<non-objectable>> value',
    oTextExpected: 'value of type matching regular expression /falsy|objectable/'
  },
  {
    array: [undefined, 0, 1, true, {}, [], 'hello'],
    actual: 'undefined',
    expected: /truthy|number/i,
    oArray: "[undefined, 0, 1, true, {}, [], 'hello']",
    oExpected: '/truthy|number/i',
    oIndex: 0,
    oMessage: 'Invalid [0] item. The [undefined] <<falsy>> value has been assigned, while the value of type matching regular expression /truthy|number/i is expected.',
    oTextActual: '[undefined] <<falsy>> value',
    oTextExpected: 'value of type matching regular expression /truthy|number/i'
  },
  {
    array: [0, false, null, undefined, {}],
    actual: 'Object',
    expected: 'falsy',
    oArray: "[0, false, null, undefined, {}]",
    oExpected: 'falsy',
    oIndex: 4,
    oMessage: 'Invalid [4] item. The [Object] <<truthy>> value has been assigned, while the value of type matching string expression "falsy" is expected.',
    oTextActual: '[Object] <<truthy>> value',
    oTextExpected: 'value of type matching string expression "falsy"'
  },
  {
    array: [0, 1, false, null, undefined, new Date()],
    actual: 'Date',
    expected: 'FALSY|number',
    oArray: "[0, 1, false, null, undefined, new Date()]",
    oExpected: 'FALSY|number',
    oIndex: 5,
    oMessage: 'Invalid [5] item. The [Date] <<truthy>> value has been assigned, while the value of type matching string expression "FALSY|number" is expected.',
    oTextActual: '[Date] <<truthy>> value',
    oTextExpected: 'value of type matching string expression "FALSY|number"'
  },
  {
    array: [0, 1, [], false, null, undefined],
    actual: 'Array',
    expected: /Falsy|number/i,
    oArray: "[0, 1, [], false, null, undefined]",
    oExpected: '/Falsy|number/i',
    oIndex: 2,
    oMessage: 'Invalid [2] item. The [Array] <<truthy>> value has been assigned, while the value of type matching regular expression /Falsy|number/i is expected.',
    oTextActual: '[Array] <<truthy>> value',
    oTextExpected: 'value of type matching regular expression /Falsy|number/i'
  }
];