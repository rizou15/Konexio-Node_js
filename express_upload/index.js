const express = require('express');
const exphbrs = require('express-handlebars');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/upload_test',
    { useUnifiedTopology: true, useNewUrlParser: true })


app.set('view engine', 'handlebars');

app.engine('handlebars', exphbrs())

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req);
    res.render('home',{
       title: 'Welcome to express upload'
});

})

const uploadSchema = new mongoose.Schema({
        username: String,
        firstname: String,
        surname: String,
        profilePicture: String
})

const user = mongoose.model('user',uploadSchema);

user.create({
        username: 'The great writer',
        firstname: 'Toni Morrison',
        surname: 'Lady',
        profilePicture:'/img/Toni Morrison.jpg'

}).then(data =>console.log(data))
.catch(err =>console.log(err))


app.listen(port, () => {
    console.log(`Server started on: ${port}`)
});