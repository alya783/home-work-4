const { When, Then, Given } = require('@cucumber/cucumber');
const {
    addStep,
    addFeature,
    addAttachment,
    addIssue,
    addArgument,
    addSeverity,
    addEnvironment,
    addLabel,
    addTestId,
    addDescription,
    addStory,
} = require('@wdio/allure-reporter').default;
Given(/^I setup step$/, function () {

});

When(/^I action step$/, async function () {
    await browser.execute('console.log("action start")')
    console.log('test!!!')
    await browser.execute('console.log("action end")')
});

When(/^I action unstable step$/, function () {
    addSeverity('critical')
    addLabel('test-label')
    addStory('test-story')
    addTestId('test-id')
    addAttachment('test-attachment', 'text text text')
    addIssue('test-issue')
    const coin = Math.floor(Math.random() * 2);
    if (coin > 0) {
        throw new Error('expect better JSON!')
    }
});

When(/^I action broken step$/, function () {
    throw new Error('File not Found!!!!')
});

When(/^I action failed step$/, function () {

});

Then(/^I observe step$/, function () {

});

When(/^I action pending step$/, function () {
    return 'skipped'
});

When(/^I observe failed step$/, function () {
    // throw new Error('expect');
    expect('a').toEqual('b', { timeout: 100000 });
});
