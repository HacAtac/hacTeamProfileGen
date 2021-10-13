const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Will get engineer role', () => {
    const engineer = new Engineer('Jordan', 'email', '40', 'Will');

    expect(engineer.getRole()).toEqual(expect.stringContaining('engineer'));
});

test('Will get engineer github from method', () => {
    const engineer = new Engineer('Jordan', 'email', '40', 'Will');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('Will get github username', () => {
    const engineer = new Engineer('Jordan', 'email', '40', 'Will');

    expect(engineer.github).toEqual(expect.any(String));
})

