const {appSettings} = require('../appSettings.js');
const jwt = require('jsonwebtoken');

module.exports = ({excluded}) => {    
    const authenticator = (req, res, next) => {
        if( isRouteGuarded(req.url) ){
            let token = req.body.token || req.query.token || req.headers['x-access-token'];
        
            if(token){
                let payload = jwt.verify(token, appSettings.secret, (err, decoded) => {
                    if(err){
                        res.json({success: false, message: 'Authentication Failed'});
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                res.status(403).send({
                    success: false,
                    message: 'Missing Auth token.'
                });
            }
        } else {
            next();
        }
    }

    const isRouteGuarded = (uri) => {
        return !excluded.some( route =>  {
            let regex = new RegExp(uri);
            return !regex.test(route);
        } );
    }

    return {
        authenticator
    }
}