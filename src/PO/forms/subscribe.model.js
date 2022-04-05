const { Select } = require('./select');
const { Field } = require('./field');
const { Checkbox } = require('./checkbox');
const { Textarea } = require('./textarea');

const model = [
    { name: 'plan', type: Select, selector: '#plan' },
    { name: 'years', type: Field, selector: '#years' },
    { name: 'user', type: Select, selector: '#user' },
    { name: 'suspend', type: Checkbox, selector: '#suspend' },
    { name: 'description', type: Textarea, selector: '#description' },
]
module.exports = { model };
