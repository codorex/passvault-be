const {router, public_routes} = require('./router.js')();
const auth = require('./middleware/auth.js');

const express = require('express');
const { appSettings }= require('./appSettings.js');
const path = require('path');

let app = express();

// move to ./server/middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// move to ./server/middleware
app.use('/static', express.static(path.join(__dirname, 'src/static')));
// app.use(bodyParser.urlencoded({ extended: false }));

app.route('/unlock').get((req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

app.use(router);
app.use(auth({excluded: public_routes}).authenticator);

app.listen(appSettings.port, appSettings.domain, () => {
    console.log(`Listening on port ${appSettings.port}.`);
});