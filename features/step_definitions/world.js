const { setWorldConstructor, defineParameterType } = require('@cucumber/cucumber');

function CustomWorld() {
    this.state = {
        description: 'object to store data between steps',
        checks: [],
    };
}

setWorldConstructor(CustomWorld);

const stringRegexp = /[^"]*/;

defineParameterType({
    regexp: /date/,
    name: 'date',
    useForSnippets: true,
    transformer(str) {
        return (new Date()).toDateString();
    },
});
