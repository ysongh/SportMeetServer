const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/keys');

exports.register = (req, res, next) => {
    const email = req.body.email;
    
    User.findOne({ email: email })
        .then(user => {
            if(user){
                return res.status(400).json({error: 'Email Already Exists'});
            }
            else{
                const newUser = new User({
                    name: req.body.name,
                    email: email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err){
                            return res.status(500).json({error: err});
                        }
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
};

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(404).json({error: 'User email not found'});
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = { id: user.id, name: user.name };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err){
                                    return res.status(500).json({error: err});
                                }
                                res.json({
                                    success: 'Login Success',
                                    token: 'Bearer ' + token
                                });
                        });
                    }
                    else{
                        return res.status(400).json({error: 'Password Incorrect'});
                    }
                });
        });
};