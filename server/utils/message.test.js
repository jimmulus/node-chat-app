const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'James';
        var latitude = 25;
        var longitude = 13;
        var url = 'https://www.google.com/maps?q=25,13';
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    })
})