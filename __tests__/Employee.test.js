const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Will make an employee object', () => {
    const employee = new Employee('Jordan', 'email', '89');
    
    expect(employee.name).toBe('Jordan');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("will get employees name", () => {
    const employee = new Employee('Jordan', 'email', '89');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("will get id", () => {
    const employee = new Employee('Jordan', 'email', '89');

    expect(employee.getId()).toEqual(expect.any(String));
});

test("will get employee email", () => {
    const employee = new Employee('Jordan', 'email', '89');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('Will get employee status', () => {
    const employee = new Employee('Jordan', 'Email', '89');

    expect(employee.getRole()).toBe('employee');
});