const {Application} = require('../../domain/application/index.js');

module.exports = ({applicationRepository}) => {
    const getSome = ({skip, take}) => {
        return new Promise((resolve, reject) => {
            applicationRepository.findSome(skip, take)
                .then(apps => resolve(apps))
                .catch(err => reject(err));
        });
    }

    return {
        getSome
    }
}

