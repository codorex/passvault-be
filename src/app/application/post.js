// const {Application} = require('../../domain/application/index.js');

module.exports = ({applicationRepository}) => {
    const create = ({body}) => {
        return new Promise((resolve, reject) => {
            if(!body){
                reject({success: false, message: 'Could not create application. Invalid data'});
            } else {
                try {
                    // const application = new Application(body.name, body.accounts);
                    const application = {name: body.name}
                    applicationRepository.create(application)
                        .then(data => resolve({success: true, message: 'Created application.', data: data}))
                        .catch(err => reject(err));

                } catch (error) {
                    reject(error);
                }
            }
        });
    }

    return {
        create
    };
}