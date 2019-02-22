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
    actual: [],
    expected: 'string'
  },
  {
    actual: [],
    expected: /number/i
  },
  {
    actual: [],
    expected: 'string|null|Number'
  },
  {
    actual: [],
    expected: String
  },
  {
    actual: [],
    expected: null
  },
  {
    actual: [],
    expected: undefined
  },
  {
    actual: [],
    expected: 'objectable'
  },
  {
    actual: [],
    expected: 'any'
  },
  {
    actual: [],
    expected: 'truthy'
  },
  {
    actual: [],
    expected: 'falsy'
  },
  {
    actual: [],
    expected: 'instance|object'
  },
  {
    actual: [],
    expected: [String, Number]
  },
  {
    actual: [],
    expected: [null, Boolean]
  },
  {
    actual: ['Nikola', 'Albert', 'Thomas'],
    expected: 'string'
  },
  {
    actual: ['Nikola', 'Albert', 'Thomas'],
    expected: 'STRING'
  },
  {
    actual: [10, 20.55, .33],
    expected: 'number'
  },
  {
    actual: [[1, 2, 3], ['Nikola', 'Albert', 'Thomas'], { names: ['Nikola', 'Albert', 'Thomas'] }, [], {}],
    expected: 'array|object'
  },
  {
    actual: [null, undefined, null, undefined],
    expected: 'null|undefined'
  },
  {
    actual: [true, false, 'Nikola', 'Albert', 'Thomas', 10, 20],
    expected: 'boolean|string|number'
  },
  {
    actual: [/hello/, /world/, new TypeError(), new Error()],
    expected: 'RegExp|Error|typeerror'
  },
  {
    actual: ['Nikola', 'Albert', 'Thomas'],
    expected: /string/i
  },
  {
    actual: [10, 5.55, .2],
    expected: /Number/i
  },
  {
    actual: [[], {}, ['Nikola', 'Albert', 'Thomas'], { names: ['Nikola', 'Albert', 'Thomas'] }],
    expected: /array|object/i
  },
  {
    actual: ['Nikola', null, 'Albert', null, 'Thomas', null],
    expected: /(String|null)/
  },
  {
    actual: ['Nikola', undefined, 'Albert', undefined, 'Thomas', undefined],
    expected: /(string|undefined)/i
  },
  {
    actual: [new Error(), new TypeError()],
    expected: /Error/
  },
  {
    actual: ['Nikola', 'Albert', 'Thomas'],
    expected: String
  },
  {
    actual: [true, false, true, false],
    expected: Boolean
  },
  {
    actual: [new Diet(1400, 55)],
    expected: Diet
  },
  {
    actual: [undefined, undefined],
    expected: undefined
  },
  {
    actual: [null, null],
    expected: null
  },
  {
    actual: ['Nikola', 20, 'Albert', 40, 'Thomas', 60],
    expected: [String, Number]
  },
  {
    actual: [[],{},null, ['Nikola', 'Albert', 'Thomas'], {names: ['Nikola', 'Albert', 'Thomas']}],
    expected: [Array, Object, null]
  },
  {
    actual: [new Person('Albert', 44), new Diet(2600, 75)],
    expected: [Person, Diet]
  },
  {
    actual: [(function(){return arguments;})('Nikola', 'Albert', 'Thomas')],
    expected: 'arguments'
  },
  {
    actual: [(function(){return arguments;})('Nikola', 'Albert', 'Thomas'), ['Nikola', 'Albert', 'Thomas']],
    expected: 'arguments|array'
  },
  {
    actual: [null, null, (function(){return arguments;})('Nikola', 'Albert', 'Thomas')],
    expected: /arguments|null/
  },
  {
    actual: [new Person('Albert', 44), new Diet(2600, 75)],
    expected: 'instance'
  },
  {
    actual: [[], ['Nikola', 'Albert', 'Thomas'], new Person('Albert', 44), new Diet(2600, 75)],
    expected: 'instance|array'
  },
  {
    actual: [new Person('Albert', 44), new Diet(2600, 75), 'Nikola', 'Albert', 'Thomas'],
    expected: /instance|string/i
  },
  {
    actual: [{},[],new String('hello world'), new Person('Albert', 44), new Diet(2600, 75)],
    expected: 'objectable|instance'
  },
  {
    actual: [{}, [], new Person('Albert', 44), new Diet(2600, 75), true, false],
    expected: 'objectable|boolean'
  },
  {
    actual: [new Number(0), 1, new Boolean(false), true],
    expected: 'truthy|objectable'
  },
  {
    actual: [new Number(1), 0, new Boolean(true), false],
    expected: 'falsy|objectable'
  },
  {
    actual: [new Number(0), 1, new Boolean(false), true],
    expected: /truthy|objectable/
  },
  {
    actual: [new Number(1), 0, new Boolean(true), false],
    expected: /falsy|objectable/
  },
  {
    actual: [{}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}, ()=>{}, Boolean],
    expected: /objectable|Function/
  },
  {
    actual: [1, true, {}, [], 'hello'],
    expected: 'truthy'
  },
  {
    actual: [0, 1, true, {}, [], 'hello'],
    expected: 'truthy|number'
  },
  {
    actual: [0, 1, true, {}, [], 'hello'],
    expected: /truthy|number/i
  },
  {
    actual: [0, false, null, undefined],
    expected: 'falsy'
  },
  {
    actual: [0, 1, false, null, undefined],
    expected: 'FALSY|number'
  },
  {
    actual: [0, 1, false, null, undefined],
    expected: /Falsy|number/i
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: 'any'
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: 'any|falsy'
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: /any/
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: /ANY/i
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: ''
  },
  {
    actual: [0, 1, false, true, null, {}, [], new Person('Albert', 44), new Diet(2600, 75), function(){}],
    expected: []
  }
];