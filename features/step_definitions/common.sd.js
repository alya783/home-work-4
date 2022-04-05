// noinspection NpmUsedModulesInstalled
const { When, Then, Given } = require('@cucumber/cucumber');

When('I wait for {string} second', async function (ms) {
    console.log({ ms })
    await browser.pause(parseInt(ms, 10) * 1000)
});

When('I print built-in parameters, word: {word}, string: {string}, int: {int}, float: {float}', function (word, string, int, float) {
    console.log({ word, string, int, float })
});

When(/^I print regex parameters, string: "([^"]*)", int: (\d+)$/, function (string, int) {
    console.log({ string, int })
});

When('I print custom parameters: {date}', function (date) {
    console.log({ date })
});
