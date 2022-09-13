const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const DBConnect = require('./utils/dbConnect');

const port = process.env.PORT ||8080;

const app = require('./app');


DBConnect();

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`.yellow.bold);
});
