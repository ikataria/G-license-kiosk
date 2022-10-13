const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/Kiosk?retryWrites=true&w=majority")


const app = new express();
app.set('view engine', 'ejs');
const port = 7000;

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