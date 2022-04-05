describe("Check app", function () {
    function assertEqual(actual, expected) {
        if (actual !== expected) {
            throw new Error(
                `The values are not Equal\n`
                + `actual: '${actual}'\n`
                + `expected: '${expected}'\n`
            );
        }
    }

    function softAssert(assertCb) {
        try {
            assertCb();
        } catch (e) {
            softAssertsErrors.push(e)
        }
    }

    function assertAll(errors) {
        if (errors.length > 0) {
            throw new Error(errors)
        }
    }

    let softAssertsErrors

    beforeEach('init softAsserts', function () {
        softAssertsErrors = [];
    })

    it('soft assert', async function () {
        softAssert(() => assertEqual('c', 'a'))
        softAssert(() => assertEqual('b', 'a'))
        softAssert(() => assertEqual('a', 'a'))

        assertAll(softAssertsErrors);
    });
});
