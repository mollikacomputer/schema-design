const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;
const cors = require('cors');
const colors = require('colors');

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('schema design App is running')
});


module.exports = app;