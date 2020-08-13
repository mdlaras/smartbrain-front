const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt')
const knex = require('knex')({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'smartbrain'
    }
});

const register = require('./controllers/register');
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res)=>{
    res.send(database.users)
})

app.post('/signin', (req, res) => {signin.handleSignIn(req,res, knex, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req,res, knex, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, knex)})

app.put('/image', (req,res) => {image.handleImage(req, res, knex)})
app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})
