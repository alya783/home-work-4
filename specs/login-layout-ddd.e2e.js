async function login(login, password) {
    await browser.url('https://viktor-silakov.github.io/course-sut?quick');
    await $('#login').setValue(login);
    await $('#password').setValue(password);
    await $('button').click();
    await browser.pause(100);
}

describe('Login', function () {
    const testData = [
        { login: 'walker@jw.com', password: 'password1', msg: 'Fail to login' },
        { login: 'walker@jw.com', password: '', msg: 'Password is empty' },
        { login: '', password: 'password', msg: 'Login is empty' },
        { login: 'old_walker@jw.com', password: 'password1', msg: 'The user is suspended' },
        { login: 'password', password: 'walker@jw.com', msg: 'Fail to login' },
        { login: 'admin', password: 'admin', msg: 'Fail to login' },
        { login: 'user', password: '123', msg: 'Fail to login' },
        { login: 'dlink', password: 'dlink', msg: 'Fail to login' },
        { login: 'user', password: '', msg: 'Password is empty' },
        { login: 'admin', password: '', msg: 'Password is empty' },
        { login: '', password: '', msg: 'Login is empty' },
    ]

    for (const user of testData) {
        it(`should not be logged in: '${user.login}', '${user.password}'`, async function () {
            await login(user.login, user.password);
            expect(await $('#error').getText()).toEqual(user.msg);
        });
    }
});
