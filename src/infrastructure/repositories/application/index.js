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
            model.findSome( skip || 0, take || 5)
                .then( async (entities) => {
                    const mapAsync = entities.map( async rawEntity => {
                        const entity = toEntity(rawEntity);

                        entity.accounts = await model.findApplicationAccounts(entity.id);

                        return entity;
                    });

                    Promise.all(mapAsync).then(results => resolve(results));
                })
                .catch(err => reject(err));
        });
    }

    const findOne = (id) => {
        return new Promise((resolve, reject) => {
            model.findOne(id)  
            .then( async (app) => {
                const entity = toEntity(app);
                entity.accounts = await model.findApplicationAccounts(entity.id);
                resolve(entity);
            })
            .catch( err => reject(err));
        })
    }

    return {
        create,
        findSome,
        findOne
    }
}