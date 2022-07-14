const Engineer = require('../lib/Engineer.js');

//gets Engineer's Object
test('creates Engineer object', () => {
    const engineer = new Engineer('Stephon', 33, 'stephon@work.com', 'StephonT');

    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getGitHub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Stephon', 33, 'stephon@work.com', 'StephonT');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//gets role from getRole()
test('gets role of empployee', () => {
    const engineer = new Engineer('Stephon', 33, 'stephon@work.com', 'StephonT');

    expect(engineer.getRole()).toEqual('Engineer');
})

