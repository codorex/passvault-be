module.exports = ({Store}) => {
    const create = (userData) => {
        return new Promise((resolve, reject) => {
            // TODO: Create User Domain model and Entity
            const {username, password} = userData;

            try {
                Store.Users.push({username: username, password: password}); 
            } catch (error) {
                reject('Corrupt data');
                return;
            }
            
            resolve({username, password});
        });
    }

    const findOne = (userData) => {
        return new Promise((resolve, reject) => {
            let user = Store.Users.find((u) => {
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