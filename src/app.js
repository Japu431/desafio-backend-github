require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();


const routes = require('./routes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@desafio-backend.u5vpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        console.log(`Connected to MongoDB!!`)
        app.listen(process.env.PORT);
    })
    .catch(err => console.log(err));
