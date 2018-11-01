const APPS = [
    { 
        id: '7dc71ff2-68f6-46d0-8c26-5c34c06433c3',
        name: 'Facebook', 
        accounts: [{ 
                username: 'momi', 
                passwords: ['test123']
            }
        ]
    }
]

module.exports = () => {
    const create = (entity) => {
        return new Promise((resolve, reject) => {
            if(!entity || !entity.name){
                reject('Invalid application model.');
            } else {
                APPS.push(entity);
                resolve(entity);
            }
        })
    }

    const findSome = (skip, take) => {
        return new Promise((resolve, reject) => {
            const applications = [];

            if(APPS.length - skip <= take){
                resolve(APPS);
            } else {
                while(take && APPS.length - skip >= take){
                    applications.push(APPS[(skip + take) - 1]);
                    take--;
                }

                resolve(applications);
            }
        })
    }

    return {
        create,
        findSome
    }
}