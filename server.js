const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const mongo_uri = 'mongodb://localhost:27017/test';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

//Database Connection
mongoose.connect(mongo_uri,function(err){
    if(err){
        throw err;
    }else{
        console.log('Connected to database');
    }
})


app.get('/api', (req, res) => res.send('Hello from express server'));

//Error handling
app.get('*', function(req, res){
   
    res.status(404).send('Not Found');

});


module.exports = app