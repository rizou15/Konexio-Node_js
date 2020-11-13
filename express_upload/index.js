const express = require('express');
const exphbrs = require('express-handlebars');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/upload_test'),
 


app.set('view engine', 'handlebars');

app.engine('handlebars', exphbrs())

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req);
    res.render('home', {
        title: 'New user'
    });

})

app.post('/upload', upload.single('image'), (req, res, next) => {
    console.log(req.file);
    res.send('l\'image est bien uploadée');

});

const uploadSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    surname: String,
    profilePicture: String
})

const User = mongoose.model('User', uploadSchema);

User.create({
    username: 'The great writer',
    firstname: 'Toni Morrison',
    surname: 'Lady',
    profilePicture: './uploads/Toni Morrison.jpg'

}).then(data => console.log(data))
    .catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Welcome to express upload: ${port}`)
});