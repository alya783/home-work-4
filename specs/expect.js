describe("Expect", function () {
    it('expects', async function () {
        await expect(1).toBe(1);

        expect({ a: 1, b: { c: 3 } }).toEqual({ a: 1, b: { c: 3 } });

        expect(10).toBeGreaterThan(3);
        expect(null).toBeNull();
        expect(undefined).toBeUndefined()

        expect([1, 2, 3]).toContain(2);
        expect('string').toContain('tri');
        expect("my string").toMatch(/string$/);
        expect("other string").toMatch("her");

        await browser.url('https://viktor-silakov.github.io/course-sut/?quick');
        await expect(browser).toHaveTitle('Log', { containing: true }) // Success


    });
});
