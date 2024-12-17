const express = require('express');

const router = new express.Router()

const userController = require('../controllers/userController')

router.post('/user/register', userController.register)
router.get('/user/getuserdetails',userController.getUserDetails)

module.exports=router