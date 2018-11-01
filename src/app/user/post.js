const { secret } = require('../../server/appSettings.js')['appSettings'];
const jwt = require('jsonwebtoken');

module.exports = ({userRepository}) => {
    const create = ({body}) => {
        return new Promise((resolve, reject) => {
            if(!body){
                reject({success: false, message: 'Could not create user. Invalid user data.'})
            } else {
                try {
                    let userData = {username: body.username, password: body.password}
                    userRepository.create(userData).then(res => {
                        const payload = {
                            username: res.username,
                            role: 'basic'
                        };
                        let token = jwt.sign( payload, secret, {
                            expiresIn: 10
                        });
                        
                        resolve({success: true, message: 'Authentication Successful!', token: token});
                    })
                    .catch(err => reject(err));
                } catch (err) {
                    reject(err);
                }
            }
        });
    }

    return {
        create
    }
}