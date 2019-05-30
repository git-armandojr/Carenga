"use strict";

const provider      = require('./account.provider');
const businessRules = require('./account.business-rules');
const authEngine    = require('../../authentication/auth');
const express       = require('express');
const route         = express.Router();

route.get('/getAll', authEngine.authMiddleware, async (req, res) => {
    try {
        let accounts = await provider.getAll();
        res.status(200).send(accounts);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.get('/get/', authEngine.authMiddleware, async (req, res) => {
    try {
        let account = await provider.get(req.user._id);
        res.status(200).send(account);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.get('/get/:id', authEngine.authMiddleware, async (req, res) => {
    try {
        let account = await provider.get(req.params.id);
        res.status(200).send(account);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.post('/update', authEngine.authMiddleware, async (req, res) => {
    try {
        await provider.update(req.body);
        res.status(200).send({ OK: true });
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.put('/register', async (req, res) => {
    try {
        let exists = await provider.getByEmail(req.body.email).then(() => true).catch(() => false);
        if(exists){
            let e = new Error();
            e.message = 'E-mail já existe';
            throw e;
        }

        await provider.insert(req.body);
        res.status(200).send({ OK: true });
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.post('/login', async (req, res) => {
    try{
        let response = await businessRules.login(req.body.email, req.body.password, req.ip);
        res.status(200).send(response);
    }
    catch(e){
        res.status(401).send(e.message);
    }
});

route.get('/checkAuth', authEngine.authMiddleware, async (req, res) => {
    res.status(200).send({ OK: true });
});

module.exports = route;
