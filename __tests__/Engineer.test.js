const Engineer = require('../lib/Engineer')

test('github', () => {
    const engineer = new Engineer('Tim', 4, 'tim@email.com', 'tim/github');

    expect(engineer.getGithub()).toBe('tim/github');
});

test('engineer role', () => {
    const engineer = new Engineer('Tim', 4, 'tim@email.com');

    expect(engineer.getRole()).toBe('Engineer');
});