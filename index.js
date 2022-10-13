const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
const port = 7000;

mongoose.connect("mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/Kiosk?retryWrites=true&w=majority", (err, cnt) => {
    if(err){
        console.log(`Error while connecting to the database`, err);
    }else{
        console.log(`Connected to the database`);
    }
})



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/g2Test', (req, res) => {
    res.render('g2Test');
})

app.get('/gTest', (req, res) => {
    res.render('gTest');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
});