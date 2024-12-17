const users = require('../models/userSchema')

exports.register = async (req, res) => {
    console.log("inside user register controller");
    const { username, email, password , phone, pincode , address, city ,state} = req.body;
    

    try {
        const existingUser = await users.findOne({ email: email })
if (existingUser) {
        res.status(400).json("account already exist")
}
else {
    console.log("user not exist")
    const newUser = new users({
        username: username,
        email: email,
        password: password,
        phone: phone,
        
    });
    await newUser.save();
    res.status(200).json("user register successfully")
}
    } catch (error) {
        res.status(401).json("register request failed due to ", error)
    }
    
}
exports.getUserDetails =(req,res)=>{
    res.status(200).json('inside get user details controller')
}
