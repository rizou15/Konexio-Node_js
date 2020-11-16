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

//app.get('/',(req,res) =>{
   // res.send('Welcome to express upload')
//})


app.get('/', (req, res) => {
    console.log(req);
    res.render('home', {
        title: 'New user'
    });

})

app.post('/upload', upload.single('image'), (req, res, next) => {
    console.log('fichiers',req.file);
    res.send('l\'image est bien uploadée');

});

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        index:true
    },
    firstname: String,
    surname: String,
    profilePicture: String
})

const User = mongoose.model('User', userSchema);

User.create({
    username: 'The great writer',
    firstname: 'Toni Morrison',
    surname: 'Lady',
    profilePicture: './uploads/Toni Morrison.jpg'

}).then(data => console.log(data))
    .catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Server express is listening on port: ${port}`)
});