const Employee = require('../lib/Employee.js');

test('create a employee object', () => {
    const employee = new Employee('Ed', 9, 'ed@email.com');

    expect(employee.name).toBe('Ed');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
});

test('return name', () => {
    const employee = new Employee('Ed', 9, 'Ed@email.com');

    expect(employee.getName()).toBe('Ed');
});

test('return ID Number', () => {
    const employee = new Employee('Ed', 9, 'Ed@email.com');

    expect(employee.getId()).toEqual(9);
});

test('return Email', () => {
    const employee = new Employee('Ed', 9, 'Ed@email.com');

    expect(employee.getEmail()).toBe('Ed@email.com');
});

test('return employee', () => {
    const employee = new Employee('Ed', 9, 'Ed@email.com');

    expect(employee.getRole()).toBe('Employee');
});