const express = require('express');
const exphbs = require('express-handlebars');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');  // autre syntaxe possible => const User = require("./models").User;
const port = 3000;
mongoose.connect('mongodb://localhost:27017/authentification_demo',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressSession({          // middleware de session qui manage les cookies pour toute requête entrante dans le serveur
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize());  // initialisation de passport quand on utilise des sessions
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));  // authentification de l'utilisateur
passport.serializeUser(User.serializeUser());   // conservation de l'id de l'utilisateur dans la session
passport.deserializeUser(User.deserializeUser()); // Reçoit l'id de l'utilisateur,de la session puis récupère l'ID de l'utilisateur,provenant de la DB 


app.get('/', (req, res) => {
    //console.log('test1');
    res.render('home')
})

app.get('/login', (req, res) => {
    //console.log('test2');
    res.render('login')
})

app.get('/signup', (req, res) => {
    //console.log('test3');
    res.render('signup')
})

// app.get('/admin', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => { 
app.get('/admin', (req, res) => {
    if (req.isAuthenticated()) {
        //console.log(req.user);
        res.render("admin");
    } else {
        res.redirect("/")

    }
})


app.post('/signup', (req, res) => {
    console.log('test5');
    const { username, password } = req.body;
    User.register({ username }, password, (err, user) => {
        if (err) {
            // console.log('test4', err);
            return res.render('signup');
        } else {
            passport.authenticate('local')(req, res, () => {
                console.log('exemple')
                res.redirect('/admin');
            })
        }
    })
});

app.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/admin",
        failureRedirect: "/login"
    })
);

app.get('/logout', (req, res) => {
    //console.log('test5');
    req.logout();
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

