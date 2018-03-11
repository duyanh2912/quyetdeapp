const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const homeRouter = require('./routers/homeRouter');
const askRouter = require('./routers/askRouter');
const answerRouter = require('./routers/answerRouter');
const questionRouter = require('./routers/questionRouter');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/answer', answerRouter);
app.use('/question', questionRouter);

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/quyetdedb', (err)=>{
    if(err) console.log(err);
    console.log("Database connect success!");
});

app.listen(6969, (err)=>{
    if(err) { console.log(err); }
    console.log("App is start at port 6969");
});