const mongoose = require('mongoose');

const connetionString = process.env.database;
mongoose.connect(connetionString).then((res) => {
    console.log("mongo db connected successfully");
})
    .catch((err) => {
    console.log("mongo connection failed");
        console.log(err);
        
})