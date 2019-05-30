"use strict";

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');

let accountSchema = new Schema({
    firstName: {
        type: String,
        minlength: [2, 'O nome do usuário deve ter ao menos duas letras!'],
        required: [true, 'O nome do usuário é obrigatório!']
    },
    lastName: {
        type: String,
        minlength: [2, 'O sobrenome do usuário deve ter ao menos duas letras!'],
        required: [true, 'O nome do usuário é obrigatório!']
    },
    email: {
        type: String,
        required: [true, 'O e-mail do usuário é obrigatório!'],
        match: [/^\w[\w\d._%+-]*@[\w\d.-]+\.[\w]{2,}(\.[\d\w]{2})?$/, 'O email do usuário é inválido!']
    },
    _password: {
        type: String,
        required: [true, 'A senha é obigatória']
    },
    lat: Number,
    lng: Number,
    address: String,
    period: {
        type: String,
        default: 'noite'
    },
    type: {
        type: String,
        default: 'carona'
    },
    invites: {
        type: [{
            name: String,
            mail: String,
            _id: ObjectId,
            lat: Number,
            lng: Number,
            address: String
        }]
    },
    matches: {
        type: [{
            name: String,
            mail: String,
            _id: ObjectId,
            lat: Number,
            lng: Number,
            address: String
        }]
    }
});

let _passwordEncryptor = function(next) {
    let errors = {};
    if(this._password && this._password.length < 4){
        errors._password = 'A senha do usuário deve ter ao menos quatro letras!';
        let error = new Error();
        error.name = 'PreValidatorError';
        error.errors = errors;
        next(error);
    }
    else {
        this._password = bcrypt.hashSync(this._password);
        next();
    }
};
accountSchema.pre('save', _passwordEncryptor);

module.exports = mongoose.model('account', accountSchema);
