const { When, Then, Given } = require('@cucumber/cucumber');
Given(/^my account balance is "([^"]*)"$/, function (balance) {
    this.state.balance = parseInt(balance, 10);
});

Given(/^the ATM contains "([^"]*)"$/, function (moneyAmount) {
    this.state.atmMoney = parseInt(moneyAmount, 10);
});

When(/^I withdraw "([^"]*)"$/, function (withdrawAmount) {
    this.state.withdrawAmount = parseInt(withdrawAmount, 10);
    console.log({ STATE: this.state })
});

Then(/^I get "([^"]*)" message$/, function (message) {
    let atmMessage = 'Take your money!';
    if (this.state.atmMoney < this.state.withdrawAmount) {
        atmMessage = 'The machine is not have enough money!'
    } else if (this.state.balance < this.state.withdrawAmount) {
        atmMessage = 'You don\'t have enough money!'
    }
    expect(atmMessage).toEqual(message);
});
