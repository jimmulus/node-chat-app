const expect = require('expect');
const {generateMessage} = require('./message');

describe('get generateMessage', () => {
    it('should return a message', () => {
        var from = 'Jim';
        var text = 'Some text';
        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');

    });
});