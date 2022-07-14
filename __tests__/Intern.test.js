const Intern = require('../lib/Intern');

//creates intern object

test('creates Intern object', () => {
    const intern = new Intern ('Stephon', 33, 'stephon@work.com', 'RCNJ');

    expect(intern.school).toEqual(expect.any(String));
});

 //get school of intern
test('gets school of intern', () => {
    const intern = new Intern ('Stephon', 33, 'stephon@work.com', 'RCNJ');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

    //get role of employee
    test('gets role of employee', () => {
    const intern = new Intern ('Stephon', 33, 'stephon@work.com', 'RCNJ');

    expect(intern.getRole()).toEqual('Intern'); 
});
    

