const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const knex = require('knex')({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'smartbrain'
    }
});

knex.select('*').from('users').then(data => {
    console.log(data)
});

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res)=>{
    res.send(database.users)
})

app.post('/signin', (req,res)=> {
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json(database.users[0])
    } else {
        res.status(400).json('error loggin in')
    }
})

app.post('/register', (req,res)=> {
    const { email, name, password} = req.body;
    knex('users').insert({
        email: email,
        name: name,
        joined: new Date()
    }).then(console.log)
})

app.get('/profile/:id', (req,res) =>{
    const id  = req.params.id;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id){
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.put('/image', (req,res)=> {
    const { id }  = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id){
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})
app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})
