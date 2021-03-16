
const User = require('../schema/user');


const store = (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({status:false, message:'Unable to create account'});
        } else {
            res.json({status:true, message:'User account created successfully'});
        }
    })
}


const login = (req, res) => {
    const user = User.findOne({ email: req.body.email})
    if (user == undefined) {
        res.json({status:false, message:'Invalid credentials'});
    } else {
        res.json({status:true, message:'Logged in successfully'});
    }
}