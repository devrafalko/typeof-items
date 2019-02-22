/* global jasmine, describe, it, expect */
import scenario from './data/scenarios-invalid.js';

describe('The module function', function () {
  describe('when callback is not defined, it should throw TypeError with message', function () {
    for (let i in scenario) {
      it(`"${scenario[i].oMessage}"`, function () {
        let binded = this.type.bind(this, scenario[i].array, scenario[i].expected);
        expect(binded).toThrowError(TypeError, scenario[i].oMessage);
      });
    }
  });
  describe('when callback is defined, it should return false and run callback with object', function () {
    for (let i in scenario) {
      it(`{ actual:${scenario[i].actual}, expected:${scenario[i].oExpected}, index:${scenario[i].oIndex}, message:${scenario[i].oMessage} }`, function () {
        let clb = jasmine.createSpy('clb');
        let binded = this.type.bind(this, scenario[i].array, scenario[i].expected, clb);
        expect(this.type(scenario[i].array, scenario[i].expected, () => { })).toBe(false);
        expect(binded).not.toThrowError();
        expect(clb).toHaveBeenCalledTimes(1);
        expect(clb).toHaveBeenCalledWith(jasmine.objectContaining({
          actual: scenario[i].actual,
          expected: scenario[i].oExpected,
          index: scenario[i].oIndex,
          message: scenario[i].oMessage,
          textActual: scenario[i].oTextActual,
          textExpected: scenario[i].oTextExpected
        }));
      });
    }
  });
});