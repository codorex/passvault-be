module.exports = ({userRepository}) => {
    const get = ({body}) => {
        return new Promise((resolve, reject) => {
            userRepository.get(userData)
                .then(res => resolve(res))
                .catch(err => reject(err));
        })
    }
}