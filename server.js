const mongoose = require('mongoose');
const colors = require('colors');
// const dotenv = require('dotenv'); // was mistake
const dotenv = require("dotenv").config();
const mongodb = require('mongodb');
// const DBConnect = require('./utils/dbConnect');


const app = require('./app');


// DBConnect();
// DATABASE CONNECTION DETAILS
mongoose.connect(process.env.DATABASE).then(()=>{
  console.log(`Database connection is successful`);
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`.yellow.bold);
});
