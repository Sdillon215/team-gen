const Manager = require('../lib/Manager.js');

test('role', () => {
    const manager = new Manager('Bob', 2, 'bob@email.com', 20);
    
    expect(manager.getRole()).toBe('Manager');
});

test('office number', () => {
    const manager = new Manager('Joe', 2, 'Blah@bleh.com', 20);

    expect(manager.getOfficeN()).toBe(20);
});