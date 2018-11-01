module.exports = ({applicationRepository}) => {
    const getSome = ({skip, take}) => {
        return new Promise((resolve, reject) => {
            applicationRepository.findSome(skip, take)
                .then(apps => resolve(apps))
                .catch(err => reject(err));
        });
    }

    const getOne = ({id}) => {
        return new Promise((resolve, reject) => {
            applicationRepository.findOne(id)
                .then( app => resolve(app))
                .catch( err => reject(err));
        })
    }

    return {
        getSome,
        getOne
    }
}

