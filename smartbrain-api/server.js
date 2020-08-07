const express = require('express');

const app = express();

const database = {
    users: [
        {
            id:'`123',
            name:'john',
            email:'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id:'`124',
            name:'sarah',
            email:'sarah@gmail.com',
            password: 'icecream',
            entries: 0,
            joined: new Date()
        }
    ]
}
app.get('/', (req, res)=>{
    res.send('this is working')
})

app.post('/signin', (req,res)=> {
    res.json('')
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})
