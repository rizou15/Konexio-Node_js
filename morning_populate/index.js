// à modifier car incomplet

const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student');
const Address = require('./models/address');
mongoose.connect('mongodb://localhost:27017/morning_populate',
    { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true });

const app = express();

app.use(express.json());

const port = 3000;


Student.create({
    firstname: '',
    surname: '',
    address: ''


}).then(data => console.log(data))
    .catch(err => console.log(err))

Address.create({
    streetName: '',
    streetNumber: '',
    postCode: '',
    city:''


}).then(data => console.log(data))
    .catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Server express is listening on port: ${port}`)
});



