class Select {
    constructor(selector) {
        this.selector = selector;
    }

    set (value) {
        return $(this.selector).selectByVisibleText(value);
    }
}

module.exports = { Select };
