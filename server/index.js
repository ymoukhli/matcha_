const express = require('express');
const db = require('./db/index.js');
const app = express('app');
const port = 3001;
const routes = require('./routes.js')
const fs = require('fs')
const cors = require('cors')

const User = require('./models/user.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended :true
}))

app.get('/', (req, res) => {
    res.send('Hello world');
    console.log('someone is here')
});

app.post('/user', (req, res) => {
    
    const user = new User({
        firstname : req.body.firstName,
        lastname : req.body.lastName,
        username : req.body.userName,
        email : req.body.email,
        password : req.body.passWord,
    });
    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'userCreated'
            })
        })
        .catch(() => {
            return res.status(400).json({
                success: false,
                message: `coudn't creat user`,
            })
        })
        
    // User.watch().on('change', data => console.log(`user collection changed ${new Date()}`, data));
});

app.use('/api', routes)
app.listen(port, () => {

    console.log(`app listening on prot ${port}`);

})

db.on('error', (e) => console.log(`error in data base: ${e.message}`))