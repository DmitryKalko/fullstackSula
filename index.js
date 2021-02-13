const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect('mongodb://localhost/sula-bd', {useNewUrlParser: true });


app.use(bodyParser.json())
app.use('/api', require('./api'));

        
app.listen(5000, ()=>{
  console.log("server is listening");
});

