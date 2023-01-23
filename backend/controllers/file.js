let upload = require('./fileOps'), Router = require('express').Router();

Router.post('/', (req, res) => {
    upload.array('media', 5)(req, res, (err) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(req.files);
    })
})


module.exports = Router;