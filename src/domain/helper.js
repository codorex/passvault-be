const { complement, isNil, compose, pickBy } = require('ramda');

const notNull = compose(complement(isNil));
const cleanData = (entity) => pickBy(notNull, entity);

module.exports = {
    cleanData
}