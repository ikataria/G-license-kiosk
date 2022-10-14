const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const dbUserData = require('./models/user');

const port = 7000;
const app = express();


mongoose.connect("mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/Kiosk?retryWrites=true&w=majority", (err, cnt) => {
    if(err){
        console.log(`Error while connecting to the database`, err);
    }else{
        console.log(`Connected to the database`);
    }
})

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/G2_page', (req, res) => {
    res.render('G2_page');
})

app.get('/G_page', (req, res) => {
    res.render('G_page');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/form/userData', (req, res) => {
    // console.log(">>>>>>>>>>>>>here 37>>>", req.body);
    dbUserData.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        licenseNumber: req.body.licenseNumber,
        dob: req.body.dob,
        carDetails: {
            make: req.body.carMake,
            model: req.body.carModel,
            year: req.body.carYear,
            plateNumber: req.body.numberPlate
        }
      },(err,blogpost) =>{
        if(err){
            console.log(`Err`, err);
        } else {
            console.log('Data saved in DB: ', blogpost);
            res.redirect('/')
        }
    })
})

app.get('/fetchUser', (req, res) => {
    dbUserData.findOne({licenseNumber: req.query.licenseNumber}, (err, userData) => {
        // if(err || !userData){
        //     console.log('No User Found');
        //     res.redirect('/G2_page')
        // } else {
        //     console.log(`${userData}`);
        //     res.render('G_page', {G2User: userData})
        // }
        res.render('G_page', {G2User: userData})
    })
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
});
