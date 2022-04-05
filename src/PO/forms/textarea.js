class Textarea {
    constructor(selector) {
        this.selector = selector;
    }

    set(value) {
        $(this.selector).setValue(value);
    }
}

module.exports = { Textarea };
