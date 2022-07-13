const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Stephon', 33, 'stephon@work.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets employee name
test('gets employee name', () => {
    const employee = new Employee('Stephon', 33, 'stephon@work.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets employee id
test('gets employee id', () => {
    const employee = new Employee('Stephon', 33, 'stephon@work.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets employee email
test('gets employee name', () => {
    const employee = new Employee('Stephon', 33, 'stephon@work.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets employee role
test('gets employee role', () => {
    const employee = new Employee('Stephon', 33, 'stephon@work.com');

    expect(employee.getRole()).toEqual('Employee');
})

//10.1.7