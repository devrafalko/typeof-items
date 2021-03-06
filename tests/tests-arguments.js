/* global describe, it, expect */
import scenario from './data/scenarios-arguments.js';

describe('When the module function type() is called', function () {
  describe('with callback defined and the arguments', function () {
    for (let i in scenario) {
      it(`type(${scenario[i].oActual}, ${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`, function () {
        let binded = this.type.bind(this, ...scenario[i].args, () => { });
        expect(binded).toThrowError(TypeError, scenario[i].message);
      });
    }
  });
  describe('without callback defined and the arguments', function () {
    for (let i in scenario) {
      it(`type(${scenario[i].oActual}, ${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`, function () {
        let binded = this.type.bind(this, ...scenario[i].args);
        expect(binded).toThrowError(TypeError, scenario[i].message);
      });
    }
  });
});