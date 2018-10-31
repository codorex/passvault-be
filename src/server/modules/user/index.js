const Router = require('express');
const Status = require('http-status');
const userRepository = require('../../../infrastructure/repositories/user/index.js');
const { get, post} = require('../../../app/user/index.js');

const database = require('../../../infrastructure/database/user/index.js');

module.exports = () => {
    const router = Router();
    const userModel = database();
    const userUseCase = userRepository(userModel);

    const getUseCase = get({userRepository: userUseCase});
    const postUseCase = post({userRepository: userUseCase});

    router.get('/', (req, res) => {
        getUseCase
            .all(req, res)
            .then(data => {
                res.status(Status.OK).json(data);
            })
            .catch(err => res.status(Status.UNAUTHORIZED).json(err))
    })

    router.post('/', (req, res) => {
        postUseCase
            .create({body: req.body})
            .then(result => res.status(Status.OK).json(result))
            .catch(err => {
                let response = {
                    success: false,
                    message: err
                };

                res.status(Status.UNAUTHORIZED).json(response);
            });
    })

    return router;
}