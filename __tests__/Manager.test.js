const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Will get manager office number', () => {
    const manager = new Manager('Jordan', 'email', '89', '10');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test('Will get the roll of manager', () => {
    const manager = new Manager('Jordan', 'email', '89', '10');

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'));
});
//test('get role for Manager', () => {

//})