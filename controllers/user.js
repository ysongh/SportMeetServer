const bcrypt = require('bcryptjs');

const User = require('../models/User');

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