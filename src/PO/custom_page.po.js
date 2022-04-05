// custom_page.po.js
const { Base } = require('./base.po')

class CustomPage extends Base {
    get sidebar() {
        return $('#sidebarMenu')
    }
}

module.exports = { CustomPage: new CustomPage() };
