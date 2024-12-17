const router = require('./Router/Router')

// 1)import dotenv module

require('dotenv').config()

// 2)import express module

const express = require('express')

// 3)import cors module

const cors = require("cors");

//4)creating server using express

const pfserver = express()

require('./DB/connection')

//5)inject cors into pfserver

pfserver.use(cors());

//6)use middle ware to convert json data to js object

pfserver.use(express.json())

pfserver.use(router)


//7)port provider

const PORT = 4000;

//8)run the server
pfserver.listen(PORT, () => {

console.log(`pfserver is running in Port ${PORT}`);

})
