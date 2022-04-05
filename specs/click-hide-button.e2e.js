// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('click on hide button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(3000);
        await browser.execute('alert(arguments[0] + arguments[1])', 'Hello', ' World!');
        await browser.pause(3000);
    });
});


