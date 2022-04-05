describe.skip('Login', function () {
    let checkLogin;
    let removeLogs;
    before('prepare the data', function () {
        checkLogin = function checkLogin() {
        };
        removeLogs = function removeLogs() {
        };
    });

    context('Internal user', function () {
        it('should login with valid credentials', function () {
            checkLogin('user', 'password');
        });
        it('should not login with invalid credentials', function () {
            checkLogin('bad-user', 'bad-password');
        });
    })
    context('External', () => {
        it('should login with valid credentials', function () {
            checkLogin('user', 'password');
        });
    })
    after('clear logs', function () {
        removeLogs();
    });
});

