# Description
`typeof-items` validates the array's items' type.

* Also see [`of-type`](https://www.npmjs.com/package/of-type) package to check if the given value|object is of expected type
* Also see [`typeof-arguments`](https://www.npmjs.com/package/typeof-arguments) to validate the arguments' types passed through the enclosing function
* Also see [`typeof-properties`](https://www.npmjs.com/package/typeof-properties) to validate the object's properties' types

# Implementation

#### with NodeJS
`npm install typeof-items`

```javascript
const type = require('typeof-items');
```

#### with Browser

#### Add `typeof-items.js` library to the HTML file.
The library is located in `./dist/typeof-items.js` directory.  
It is a webpack&babel bundled cross-browser library version.  
The library is accessible as `typeofItems` variable in the global *(window)* scope.

```html
<head>
  <script src='typeof-items.js'></script>
  <script>
    var inventors = ['Nikola', 'Albert', 'Thomas']
    typeofItems(inventors, String);
  </script>
</head>
```

# Tests
```
> git clone https://github.com/devrafalko/typeof-items.git
> cd typeof-items
> npm install
> npm test        //run tests in node
> npm test deep   //run tests in node with errors shown
```

# Usage
### `type(actual, expected[, callback])`
### `actual` **[Array]**
* It should indicate the [Array] object
* The item of **`actual`** array will be validated

### `expected`
* The **`expected`** should indicate the expected **type** that **all** items of `actual` array should be of

###  The `expected` Types
There are four ways to check the type of items:
* by **string expression** values
* by **regular expression** values
* by **constructor functions**, `null` or `undefined` values
* by some of supported custom types

> Mind, that the `typeof-items` library uses the `of-type` library as the dependency, to validate the types. If you feel confused how to use the types, see more samples [here](https://www.npmjs.com/package/of-type#samples).

`[String]`
* Possible values:  
  * `'null'`, `'undefined'`  
  * any value that equals to property's `constructor.name`, eg:  
  `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The [String] type is case insensitive:
  * `'String'`, `'string'`, `'StRiNg'` checks if the property is of `[String]` type
  * `'RegExp'`, `'REGEXP'`, `'regexp'` checks if the property is of `[RegExp]` type
* The [String] type can contain multiple types, separated with `|`:
  * `'array|object'` checks if the property is of `[Array]` **`OR`** `[Object]` type
  * `'undefined|null'` checks if the property is of `undefined` **`OR`** `null` type

```javascript
type(['Nikola', 'Albert', 'Thomas'], 'String|Number|null');
```

`[RegExp]`
* Possible values: 
  * `/null/`, `/undefined/`
  * any value matching the property's `constructor.name`, eg: `/String/`, `/Number/`, `/RegExp/`, `/Array/`, `/Object/`, `/Boolean/`,`/Buffer/`, `/Promise/`, etc.
* Use all regular expression's features to match the type in a desired way:
  * `/Str/`, `/Err/`, `/Reg/`, `/B/`
  * `/.+Error$/`, `/^RegExp$/`, 
  * `/^[A-Z][a-z]+$/`
* For the case insensitivity use `i` flag:
  * `/string/i`, `/regexp/i`, `/TYPEERROR/i`
* For multiple values use regexp `(x|y)` expression:
  * `/String|Number/`, `/TypeError|Error/`, `/(obj|str)/i`

```javascript
type(['Nikola', 'Albert', 'Thomas'], /number|string|undefined/i);
```

`[Function|Array|null|undefined]`
* Possible values:
  * `null`, `undefined`
  * any `[Function]` constructor, eg: `String`, `TypeError`, `Promise`, `Array`, etc.
* For multiple values use array:
  * `[String, Object, Array, null]`
  * `[null, undefined, Boolean]`

```javascript
type(['Nikola', 'Albert', 'Thomas'], [Number, String, undefined]);
```

> When you use **bundlers** or **minifiers**, use `[String|RegExp]` type **wisely** as bundlers may change the names of functions|constructors|classes in the output file.

### Extra types:

`[String] 'arguments'` | `[RegExp] /arguments/`

* The type `'arguments'` or `/arguments/` expects the item to be the function's `arguments` object

`[String] 'instance'` | `[RegExp] /instance/`
* The type `'instance'` or `/instance/` expects the item to be the instance of the user's class|constructor
* It fails when the item is an instance of built-in *(native)* constructor
  * `[]`, `'hello world'`, `{}`
* It fails for instances that are the `global`|`window`'s properties

`[String] 'objectable'` | `[RegExp] /objectable/`
* The type `'objectable'` or `/objectable/` expects the item to be the object that is the instance of the `Object` constructor
  * `{}`, `[]`, `new String('hello world')`, `new Boolean(1)`
* It fails when the item is a primitive value or a simple value
  * `'hello world'`, `true`, `10`, `null`, `undefined`

`[String] 'truthy'` | `[RegExp] /truthy/`
* The type `'truthy'` or `/truthy/` expects the item to be like:
  * `'abc'`, `true`, `1`, `-1`, `{}`, `[]`, `function(){}`

`[String] 'falsy'` | `[RegExp] /falsy/`
* The type `'falsy'` or `/falsy/` expects the item to be like:
  * `''`, `false`, `0`, `null`, `undefined`, `NaN`

`[String] 'any'` | `[RegExp] /any/` | `[Array] []` | `[String] ""`
* The `type` `'any'` or `/any/` or empty array `[]` or empty string `""` expects the item to be of any type

### `callback` **[Function]** *(optional)*
* if **not passed**, the **TypeError** with **default message** will be **thrown** to the console, if any item's type is invalid.
* The TypeError default message is eg.: 
  * `Invalid [0] item. The [undefined] value has been assigned, while the value of type matching string expression "string|null" is expected.`
  * `Invalid [1] item. The [undefined] <<falsy>> value has been assigned, while the value of type matching string expression "truthy|null" is expected.`
  * `Invalid [5] item. The [undefined] value has been assigned, while the value of type matching regular expression /String|null/ is expected.`
  * `Invalid [3] item. The [undefined] value has been assigned, while the value of type [String|null] is expected.`
* if **passed**, the default TypeError **will not be thrown** to the console and the user can decide what to do inside the `callback` function.
* Use callback function if you don't want to stop your code execution by default *(no callback)* **`throw`** statement!
* the `callback` function is executed **only** if at least one item value is of invalid type.
* The one [Object] argument is passed through `callback` function with the following properties:
  * **`index`**  
    indicates the [Number] index of the incorrect item of the array, eg. `0`, `5`
  * **`actual`**  
    indicates the [String] actual type of the incorrect items's value, eg. `"Boolean"`, `"null"`
  * **`expected`**  
    indicates the type(s) expected by the user, eg. `"Array"`, `"Boolean|Number"`, `"/array|object/i"`
  * **`message`**  
    is the default error [String] message, that you can use eg. to log in the console
  * **`textActual`**  
    indicates the [String] textual actual type, eg. `"[undefined] <<falsy>> value"`
  * **`textExpected`**  
    indicates the [String] textual expected type, eg. `"value of type matching regular expression /String|null/"`

```javascript
const type = require('typeof-items');

const inventors = ['Nikola', 'Albert', 'Thomas'];

type(inventors, [Object, null], ({ message, index, expected, actual })=>{
  console.error(message);
  //throw new Error(`Invalid [${index}] [${actual}] item. Each inventor on the list should be pushed as the [${expected}] item.`);
});
```

### Return value
The function `type()` returns `true` when all items of the `actual` array are of **valid** types.  
The function `type()` returns `false` when at least **one** of the checked items is of **invalid** type.

```javascript
const valid = type(['Nikola', 'Albert'], [Object, null], () => {
  console.log('Aborted.');
});
if(!valid) return;
```