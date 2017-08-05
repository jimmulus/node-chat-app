const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'John',
            room: 'Theatre'
        }, {
            id: '2',
            name: 'Mike',
            room: 'Books'
        }, {
            id: '3',
            name: 'Jane',
            room: 'Theatre'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jim',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user])
    });

    it('should remove a user', () => {
        userId = '3';
        var user = users.removeUser(userId);
        
        expect (user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () =>{
        userId = '45';
        var user = users.removeUser(userId);
        
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
    
    it('should find a user', () => {
        userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', () =>{
        userId = '4';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for Theatre', () => {
        var userList = users.getUserList('Theatre');
        expect (userList).toEqual(['John', 'Jane']);
    });

    it('should return names for Books', () => {
        var userList = users.getUserList('Books');
        expect (userList).toEqual(['Mike']);
    });

});