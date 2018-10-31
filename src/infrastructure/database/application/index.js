const APPS = [
    { 
        name: 'Facebook', 
        accounts: [{ 
                username: 'momi', 
                passwords: ['test123']
            }
        ]
    }
]

module.exports = () => {
    const create = (appData) => {
        return new Promise((resolve, reject) => {
            if(!appData || !appData.name){
                reject('Invalid application model.');
            } else {
                const application = {
                    name: appData.name,
                    accounts: appData.accounts || [{username: '', passwords: []}]
                };

                APPS.push(application);

                resolve(application);
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