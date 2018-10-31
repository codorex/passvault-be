module.exports = (model) => {
    const create = (appData) => {
        return new Promise((resolve, reject) => {
            model.create(appData)
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    const findSome = (skip, take) => {
        return new Promise((resolve, reject) => {
            model.findSome(skip, take)
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    return {
        create,
        findSome
    }
}