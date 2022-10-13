const mongoose = require("mongoose");
const blogPost = require('./models/user');

mongoose.connect("mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/Kiosk?retryWrites=true&w=majority")

blogPost.create({
    firstName: "Mohit",
    lastName: "Kataria",
    age: 25,
    licenseNumber: "M01234567890",
    carDetails:{
        make: "Mercedes",
        model: "G-Wagon",
        year: "2023",
        plateNumber: "CH SAHAB"
    }
}, (err, data) => {
    if(err)
        console.log('err', err);
    else
        console.log(data);
})

// blogPost.find({title : /the/i }, (err, data) => {
//     if(err)
//         console.log('err', err);
//     else
//         console.log(data);
// })

// New way to find data by ID, NO object is required to pass into thesearch query
// blogPost.findById("633e03471d77c23ea9e15c7a", (err, data) => {
//     if(err)
//         console.log('err', err);
//     else
//         console.log(data);
// })

// blogPost.findOneAndUpdate({_id : "633e03471d77c23ea9e15c7a"}, {title : "This is updated title"}, (err, data) => {
//     if(err)
//         console.log('err', err);
//     else
//         console.log(data);
// })

// blogPost.findOneAndDelete({_id : "633e03471d77c23ea9e15c7a"}, {title : "This is updated title"}, (err, data) => {
//     if(err)
//         console.log('err', err);
//     else
//         console.log(data);
// })