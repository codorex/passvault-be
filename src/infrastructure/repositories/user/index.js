// CRUD operations on data here
// Repositories should depend on the database model/ORM

// model/orm handles business logic?

// use DI container

module.exports = (model) => {
    const create = (userData) => {
        return new Promise((resolve, reject) => {
            if(!userData.username ||
               !userData.password){
                   reject('Incomplete user object.');
            } else {
                model.create(userData)
                    .then( data => {
                        resolve({success: true, message: 'Created User.', data: data})
                    })
                    .catch( err => {
                        reject(err);
                    });
            }
        })
    }
    
    const findOne = (userData) => {
        return new Promise((resolve, reject) => {
            model.find(userData)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    }

    return {
        create,
        findOne
    }
}