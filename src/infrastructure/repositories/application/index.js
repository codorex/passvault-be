const {toEntity} = require('./transform.js');
const uuid = require('uuid/v4');

module.exports = (model) => {
    const create = (appData) => {
        return new Promise((resolve, reject) => {
            const raw = appData = Object.assign({}, appData, {id: uuid()});
            const entity = toEntity(raw);
           
            model.create(entity)
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    const findSome = (skip, take) => {
        return new Promise((resolve, reject) => {
            model.findSome(skip, take)
                .then( entities => {
                    entities.map( rawEntity => {
                        const entity = toEntity(rawEntity);
                        return entity;
                    });

                    resolve(entities);
                })
                .catch(err => reject(err));
        });
    }

    return {
        create,
        findSome
    }
}