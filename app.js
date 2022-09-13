const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const port = process.env.PORT || 5000;
const cors = require('cors');
const colors = require('colors');

// middleware
app.use(express.json());
app.use(cors());

// schema desigh
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Provide a name for this product"],
        trim: true, // first and last unnacessary space
        unique:[true, "Name must be unique"],
        minLength:[3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"]
    },
    description:{
        type:String,
        required:[true, "Please provide a name for this product"],

    }
})

app.get('/', (req, res) =>{
    res.send('schema design App is running')
});


module.exports = app;