const Manager = require('../lib/Manager');

// creates manager object
test('creates manager object', () => {
    const manager = new Manager ('Stephon', 33, 'stephon@work.com', 100)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole
test('gets role of employee', () => {
    const manager = new Manager('Stephon', 33, 'stephon@work.com');

    expect(manager.getRole()).toEqual('Manager');
});