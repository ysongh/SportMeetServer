const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const db = require('./config/keys').mongoURI;

const userRoutes = require("./routes/user");
const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.use('/user', userRoutes);
app.use('/feed', feedRoutes);

app.get('/', (req, res) => res.send('Sport Meet Server'));

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 8080;

mongoose.connect(db, { useNewUrlParser: true })
    .then(result => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    });