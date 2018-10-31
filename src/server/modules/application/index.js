const Router = require('express');
const Status = require('http-status');
const applicationRepository = require('../../../infrastructure/repositories/application/index.js');

const {post, get} = require('../../../app/application/index.js');

const database = require('../../../infrastructure/database/application/index.js');

module.exports = () => {
    const router = Router();
    const applicationModel = database();
    const applicationUseCase = applicationRepository(applicationModel);
    
    const getUseCase = get({applicationRepository: applicationUseCase});
    const postUseCase = post({applicationRepository: applicationUseCase});

    router.get('/', (req, res) => {
        let skip = req.query.s;
        let take = req.query.t;

        getUseCase
            .getSome({skip, take})
            .then(result => res.status(Status.OK).json(result))
            .catch(err => res.status(Status.BAD_REQUEST).json(err));
    });

    router.post('/', (req, res) => {
        postUseCase
            .create({body: req.body})
            .then(result => res.status(Status.OK).json(result))
            .catch(err => {
                const response = {
                    success: false,
                    message: err
                };
                
                res.status(Status.BAD_REQUEST).json(response);
            });
    })

    return router;
}