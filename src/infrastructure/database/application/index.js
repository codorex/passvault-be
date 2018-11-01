module.exports = ({Store}) => {
    const create = (entity) => {
        return new Promise((resolve, reject) => {
            if(!entity || !entity.name){
                reject('Invalid application model.');
            } else {
                Store.Applications.push(entity);
                resolve(entity);
            }
        })
    }

    const findSome = (skip, take) => {
        return new Promise((resolve, reject) => {
            const applications = [];

            if(Store.Applications.length - skip <= take){
                resolve(Store.Applications);
            } else {
                while(take && Store.Applications.length - skip >= take){
                    const application = Store.Applications[(skip + take) - 1];

                    applications.push(application);
                    take--;
                }

                resolve(applications);
            }
        })
    }

    const findOne = (id) => {
        return new Promise((resolve, reject) => {
            try {
                const application = Store.Applications.find(app => {
                    return app.id === id;
                });

                resolve(application);
            } catch (error) {
                reject(error);
            }
        })
    }

    const findApplicationAccounts = (id) => {
        return new Promise((resolve, reject) => {
            const accounts = Store.Accounts.find( acc => {
                return acc.applicationId === id;
            });

            resolve(accounts);
        })
    }

    return {
        create,
        findSome,
        findOne,
        findApplicationAccounts
    }
}