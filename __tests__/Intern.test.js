const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('Makes intern obj with a school prop', () => {
    const intern = new Intern('Jordan', 'email', '89', 'SC');

    expect(intern.school).toEqual(expect.any(String));
});

test('Get school from method', () => {
    const intern = new Intern('Jordan', 'email', '89', 'SC');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('Gets role for intern', () => {
    const intern = new Intern('Jordan', 'email', '89', 'SC');

    expect(intern.getRole()).toEqual(expect.stringContaining('intern'));
});