export default [
  {
    args: [null, {}],
    oActual: 'null',
    oExpected: '{}',
    message: /The \[0\] argument must be of type \[Array\]./
  },
  {
    args: [],
    oActual: '[not-defined]',
    oExpected: '[not-defined]',
    message: /The \[0\] argument must be of type \[Array\]./
  },
  {
    args: [undefined, undefined],
    oActual: 'undefined',
    oExpected: 'undefined',
    message: /The \[0\] argument must be of type \[Array\]./
  },
  {
    args: [{ name: 'Paul' }, null],
    oActual: "{ name: 'Paul' }",
    oExpected: 'null',
    message: /The \[0\] argument must be of type \[Array\]./
  },
  {
    args: [[1, 2, 3]],
    oActual: "[1, 2, 3]",
    oExpected: '[not-defined]',
    message: /(The \[1\] argument must be defined with the expected type\.|Invalid \[0\] item\. The \[Number\] value has been assigned\, while the value of type \[\] is expected\.)/
  },
  {
    args: [[1, 2, 3], 10],
    oActual: "[1, 2, 3]",
    oExpected: '10',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], true],
    oActual: "[1, 2, 3]",
    oExpected: 'true',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], new Date()],
    oActual: "[1, 2, 3]",
    oExpected: 'new Date()',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [1, 2, 3]],
    oActual: "[1, 2, 3]",
    oExpected: '[1, 2, 3]',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], {}],
    oActual: "[1, 2, 3]",
    oExpected: '{}',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [String, null, true]],
    oActual: "[1, 2, 3]",
    oExpected: '[String, null, true]',
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], ['string']],
    oActual: "[1, 2, 3]",
    oExpected: "['string']",
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [/string/]],
    oActual: "[1, 2, 3]",
    oExpected: "[/string/]",
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [/string/, 'string', null, String, Boolean]],
    oActual: "[1, 2, 3]",
    oExpected: "[/string/, 'string', null, String, Boolean]",
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [String, 'instance']],
    oActual: "[1, 2, 3]",
    oExpected: "[String, 'instance']",
    message: /The expected type is not callable./
  },
  {
    args: [[1, 2, 3], [String, /instance/]],
    oActual: "[1, 2, 3]",
    oExpected: "[String, /instance/]",
    message: /The expected type is not callable./
  }
];
