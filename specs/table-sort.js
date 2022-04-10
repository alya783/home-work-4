async function makeLoggingIntoSystem(){
    await browser.url('https://viktor-silakov.github.io/course-sut/index.html?quick');
    await $('#login').setValue('walker@jw.com');
    await $('#password').setValue('password');
    await $('button').click();
    await $('#spinner').waitForDisplayed({ reverse: true, timeout: 10500 });
}

async function checkOrder(arrow, selector, arrowDirection){
    if(arrowDirection === 'asc'){
        await $(arrow).click();
        const order = await $(selector);
        await expect(order).toHaveAttr('aria-sort', arrowDirection);
    } else{
        await $(arrow).doubleClick();
        await $(arrow).click();
        const order = await $(selector);
        await expect(order).toHaveAttr('aria-sort', arrowDirection);
    }
}

async function getArray(selector){
    const data = await $$(selector);
    const dataProm = data.map(async (element) => {return await element.getText()});
    return await Promise.all(dataProm);
}

async function getSortedArray(arr, order) {
    return arr.map(item => Number(item))
        .sort(function(a, b) {
            if (order === 'asc') {
                return a - b
            } else {
                return b - a
            }
        })
        .map(item => String(item))
}


describe("test for accurate table sort", function () {

    before('logging into system', async function () {
        await makeLoggingIntoSystem();
    });

    context('check id field sort', async function(){

        const idArrow = '//*[@id="example-table"]/div[1]/div[1]/div[1]/div[1]/div/div[2]';
        const order = '//div[@tabulator-field="id" and @class="tabulator-col tabulator-sortable"]';
        const idSelector = '//div[@tabulator-field="id" and @class="tabulator-cell"]';
    
        it('check asc sort', async function () {
            await checkOrder(idArrow, order, 'asc');
            const currArray = await getArray(idSelector);
            const expectedArray = await getSortedArray(currArray, 'asc');                       
            await expect(currArray).toEqual(expectedArray);
        });
        
        it('check desc sort', async function () {
            await checkOrder(idArrow, order, 'desc');
            const currArray = await getArray(idSelector);
            const expectedArray = await getSortedArray(currArray);                       
            await expect(currArray).toEqual(expectedArray);
        });
    })

    context('check name field sort', async function(){

        const nameArrow = '//*[@id="example-table"]/div[1]/div[1]/div[2]/div[1]/div/div[2]';
        const order = '//div[@tabulator-field="name" and @class="tabulator-col tabulator-sortable"]';
        const nameSelector = '//div[@tabulator-field="name" and @class="tabulator-cell"]';
    
        it('check asc sort', async function () {
            await checkOrder(nameArrow, order, 'asc');
            const currArray = await getArray(nameSelector);
            const expectedArray = currArray.sort();              
            await expect(currArray).toEqual(expectedArray);
        });

        it('check desc sort', async function () {
            await checkOrder(nameArrow, order, 'desc');
            const currArray = await getArray(nameSelector);
            const expectedArray = currArray.sort().reverse();                    
            await expect(currArray).toEqual(expectedArray);
        });
    })

    context('check age field sort', async function(){

        const ageArrow = '//*[@id="example-table"]/div[1]/div[1]/div[3]/div[1]/div/div[2]';
        const order = '//div[@tabulator-field="age" and @class="tabulator-col tabulator-sortable"]';
        const ageSelector = '//div[@tabulator-field="age" and @class="tabulator-cell"]';
    
        it('check asc sort', async function () {
            // логи специально оставила, эта часть отработала с ошибкой в Firefox 97
            await checkOrder(ageArrow, order, 'asc');
            const currArray = await getArray(ageSelector);
            console.log('Age asc current: ' + currArray)
            const expectedArray = await getSortedArray(currArray, 'asc');      
            console.log('Age asc after sort: ' + expectedArray)             
            await expect(currArray).toEqual(expectedArray);
        });
        
        it('check desc sort', async function () {
            // логи специально оставила, эта часть отработала с ошибкой в Firefox 97
            await checkOrder(ageArrow, order, 'desc');
            const currArray = await getArray(ageSelector);
            console.log('Age desc current: ' + currArray)
            const expectedArray = await getSortedArray(currArray); 
            console.log('Age desc after sort: ' + expectedArray)                       
            await expect(currArray).toEqual(expectedArray);
        });
    })
});

