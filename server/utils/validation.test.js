const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString valdation', () => {
    it('should reject non string values', () => {
        var res = isRealString(12345);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var res = isRealString('       ');
        expect(res).toBe(false);
    });
    it('should allow string with non-space characters',() => {
        var res = isRealString('ABCD');
        expect(res).toBe(true);
    });

});