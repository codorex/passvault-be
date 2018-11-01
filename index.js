const app = require('./src/app/index.js');
const server = require('./src/server/server.js');

const application = app({ server: server() });

application.start().catch( err => {
    console.error(err);
})