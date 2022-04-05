describe("test for loop", function () {
    it('log for', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: false, timeout: 5000 });
        await browser.pause(15000);
        await $('.table-responsive').scrollIntoView();
        await browser.pause(700);
        const tableHeaders = await $$('.tabulator-sortable');
        for (const header of tableHeaders) {
            const text = await header.getText();
            console.log({ text });
            header.click();
            await browser.pause(1000);
        }
    })
})
