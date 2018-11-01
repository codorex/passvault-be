const controller = require('./utils/create_controller.js');
const { appSettings } = require('./appSettings.js');

const { Router } = require('express');

module.exports = () => {
    const router = Router();
    const apiRouter = Router();
    const version = appSettings.version;

    const public_routes = [
        `/api/${version}/authenticate`,
        /^\/static/
    ]

    //register routes
    apiRouter.use('/authenticate', controller('user'));
    apiRouter.use('/applications', controller('application'));

    router.use(`/api/${version}`, apiRouter);

    return {
        public_routes,
        router
    }
}