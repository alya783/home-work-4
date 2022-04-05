// base.po.js
class Base {
    get main() {
        return $('header');
    }

    get search() {
        return this.main.$('input');
    }
}

module.exports = { Base };
