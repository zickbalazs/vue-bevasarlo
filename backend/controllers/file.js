const path = require('path');

let upload = require('./fileOps'), Router = require('express').Router();

Router.post('/upload', (req, res) => {
    console.log(req.body);
    console.log(req.files);
    upload.array('media', 5)(req, res, (err) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(req.files);
    })
})
Router.get('/uploads/:imagename', (req,res)=>{
    res.sendFile(path.join(__dirname, '../uploads/'+req.params.imagename));
})


module.exports = Router;