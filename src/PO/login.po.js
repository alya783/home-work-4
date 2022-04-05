class Login {
    // components
    get main() {
        return $('#login-wrap');
    }

    get username() {
        return this.main.$('#login');
    }

    get password() {
        return this.main.$('#password');
    }

    get rememberCheckbox() {
        return this.main.$("[type='checkbox']");
    }

    get submitButton() {
        return this.main.$('button');
    }

    // actions
    async login(credentials) {
        await this.username.setValue(credentials.username);
        await this.password.setValue(credentials.password);
        await this.submitButton.click();
        await $('#user-label').waitForDisplayed({timeoutMsg: 'cannot login into system'});
    }
}

module.exports = { Login: new Login() }
