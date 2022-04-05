const { Base } = require('./base.po')

class CustomPage2 {
    get header() {
        return new Base();
    }

    get sidebar() {
        return $('#sidebarMenu')
    }
}

module.exports = { CustomPage2: new CustomPage2() };
