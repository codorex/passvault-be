const express = require('express');

const {router, public_routes} = require('./router.js')();
const auth = require('./middleware/auth.js');
const cors = require('./middleware/cors.js');

const { appSettings }= require('./appSettings.js');
const path = require('path');

module.exports = () => {
    const app = express();

    app.use(cors);
    app.use(router);
    app.use(auth({excluded: public_routes}).authenticator);

    app.use('/static', express.static(path.join(__dirname, 'src/static')));

    return {
        start: () => new Promise((resolve) => {
            const http = app.listen(appSettings.port, appSettings.domain, () => {
                console.log(`App started on port ${appSettings.port}`);
            })
        })
    }
}