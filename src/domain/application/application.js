const t = require('tcomb');
const { cleanData } = require('../helper.js');
const { compose } = require('ramda');

const Application = t.struct({
    id: t.String,
    name: t.String,
    accounts: t.maybe(t.Array)
});

const entity = compose(cleanData, Application);

module.exports = entity;