const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();

// so we can parse json
app.use(bodyParser.json());

// for our RESTful api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(8080);