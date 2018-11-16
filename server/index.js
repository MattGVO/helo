require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const loginCtrl = require('./loginCtrl')
const bodyParser = require('body-parser')

const app = express();

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const port = SERVER_PORT

massive(CONNECTION_STRING).then( db => app.set('db', db))

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.post('/auth/signup', loginCtrl.signup)

app.post('/auth/login', loginCtrl.login)

app.get('/auth/user-data',loginCtrl.userData)

app.listen(port, () => console.log(`Port ${port} is a listenin'`))