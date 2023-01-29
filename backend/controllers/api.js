let Router = require('express').Router(), mysql = require('mysql2'), sequelize = require('./db')
sequelize.sync();
Router.get('/:tablename', (req, res) => {
    if (sequelize.models[req.params.tablename] != undefined) {
        sequelize.models[req.params.tablename].findAll().then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})
Router.get('/:tablename/:field/:value', (req, res) => {
    if (sequelize.models[req.params.tablename != undefined]) {
        sequelize.models[req.params.tablename].findAll({
            where: JSON.parse(`{"${req.params.field}":"${req.params.value}"}`)
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})
Router.post('/:tablename', (req, res) => {
    if (sequelize.models[req.params.tablename] != undefined) {
        sequelize.models[req.params.tablename].create(req.body).then(data => {
            res.status(200).send(data)
        }).catch(err => {
            res.status(500).send(err);
        });
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})
Router.delete('/:tablename/:id', (req, res) => {
    if (sequelize.models[req.params.tablename] != undefined) {
        sequelize.models[req.params.tablename].destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})
Router.delete('/:tablename', (req, res) => {
    if (sequelize.models[req.params.tablename]) {
        try{
            sequelize.models[req.params.tablename].sync({force:true})
            res.status(200).send({message:"Successful deletion!", code:'TABLE_DELETED'})
        }
        catch (err){
            res.status(500).send(err);
        }
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})
Router.patch('/:tablename/:id', (req, res) => {
    if (sequelize.models[req.params.tablename] != undefined) {
        sequelize.models[req.params.tablename].update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    }
    else res.status(400).send({ message: 'Table not in database!', code: 'ERR_NO_SUCH_TABLE' });
})

module.exports = Router;