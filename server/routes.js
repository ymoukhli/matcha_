const express = require('express')
const controller = require('./controller/userCtrl.js')
const router = express.Router();

 router.post('/signup',  controller.creatUser)
 router.get('/', () => console.log('route working'))

module.exports = router;