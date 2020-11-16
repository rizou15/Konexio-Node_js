// à modifier car incomplet

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Student = require('./models/student');
const Address = require('./models/address');
mongoose.connect('mongodb://localhost:27017/morning_populate',
    { useUnifiedTopology: true, useNewUrlParser: true });


app.get('/', (req, res) => {
    console.log(req);
    res.render('home', {
        title: 'New student'
    });

})

app.post('/upload', upload.single('image'), (req, res, next) => {
    console.log('fichiers', req.file);
    res.send('l\'image est bien uploadée');

});


Student.create({
    _id: '',
    firstname: '',
    surname: '',
    address: ''


}).then(data => console.log(data))
    .catch(err => console.log(err))

Address.create({
    _id:'',
    streetName: '',
    streetNumber: '',
    postCode: '',
    city:''


}).then(data => console.log(data))
    .catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Server express is listening on port: ${port}`)
});



