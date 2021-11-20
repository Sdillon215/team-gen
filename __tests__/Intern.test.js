const Intern = require('../lib/Intern')

test('school', () => {
    const intern = new Intern('Jeff', 7, 'jeff@email.com', 'The U');

    expect(intern.getSchool()).toBe('The U');
});

test('role', () => {
    const intern = new Intern('Jeff', 7, 'jeff@email.com');

    expect(intern.getRole()).toBe('Intern');
});