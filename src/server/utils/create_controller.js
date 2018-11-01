let path = require('path');

// exporting functions so I can hook dependencies with DI container later on
module.exports = (controllerUri) => {
    const controllerPath = path.resolve('src/server/modules', `${controllerUri}\\index.js`);
    const Controller = require(controllerPath);
    console.log(controllerPath)
    return Controller();
}