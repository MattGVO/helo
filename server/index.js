const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const loginCtrl = require('./loginCtrl')
require('dotenv').config
const app = express();
app.use(bodyParser.json())

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

massive(CONNECTION_STRING).then( db => app.set('db', db) )

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.post('/auth/signup', loginCtrl.signup)

app.post('/auth/login', loginCtrl.login)

app.get('/auth/user-data',loginCtrl.userData)

app.get('/auth/logout',loginCtrl.logout)



const port = SERVER_PORT || 4300
app.listen(port, () => console.log(`Port ${port} is listening!`))