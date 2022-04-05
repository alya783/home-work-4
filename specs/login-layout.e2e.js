// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(15000);
        const title = await browser.getTitle();
        if (title !== 'Report portal') {
            throw new Error('You don`t login into system!!!')
        }
    });
});


