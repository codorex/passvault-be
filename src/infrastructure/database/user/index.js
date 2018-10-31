const USERS = [
    { username: 'momi', password: 'password' }
]

module.exports = () => {
    const create = (userData) => {
        return new Promise((resolve, reject) => {
            const {username, password} = userData;
    
            try {
                USERS.push({username, password}); 
            } catch (error) {
                reject('Corrupt data');
                return;
            }
            
            resolve({username, password});
        });
    }

    const findOne = (userData) => {
        return new Promise((resolve, reject) => {
            let user = USERS.find((u) => {
                return u.username === userData.username &&
                       u.password === userData.password;
            });
    
            if(!user){
                reject('Could not find user.');
                return;
            } else {
                resolve(user);
            }
        });
    }

    return {
        create,
        findOne
    }
}