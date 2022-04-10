async function makeLoggingIntoSystem(login, password){
    await browser.url('https://viktor-silakov.github.io/course-sut');
    await $('#login').setValue(login);
    await $('#password').setValue(password);
    await $('button').click();
    await $('#spinner').waitForDisplayed({ reverse: true, timeout: 10500 });
}

async function waitForNumber(num, timeout){
    await browser.waitUntil(
        async () => { 
            let database = await $('//script[@id="database"]').getHTML(false);
            let data = JSON.parse(database);
            for(let i = 0; i < data.length; i++){
                if(data[i].num == num){
                    return true;
                }   
            }  
        }, {timeout: timeout}
    )
}

async function enterNumber(num){
    await $('//*[@id="sum-to-buy"]').addValue(num);
    await waitForNumber(num, 5000);
}

async function toMakeConversion(){
    const value = await $('//*[@id="sum-to-buy"]').getValue();
    const rate = await $('//*[@id="currency-rate"]').getText();
    const result = String(Number(value) * Number(rate));
    return `${value} => ${result}`; 
}

describe("test for accurate currency conversion", function () {
    before('logging into system', async function () {
        await makeLoggingIntoSystem('walker@jw.com', 'password');
    });

    before('input numbers', async function () {
        await enterNumber(1);
        await enterNumber(2);
        await enterNumber(3);
        await enterNumber(4);

        await $('//button[@class="btn btn-primary"]').click();
    });

    it('check conversion', async function () {
        const expectedValue = await toMakeConversion();
        const currResult = await $('//*[@id="withdrew"]').getText();
        await expect(currResult).toEqual(expectedValue);
    });   
})