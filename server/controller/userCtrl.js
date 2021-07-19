const User = require('../models/user.js')

creatUser = async (req, res, next) =>
{
    
    const user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    });
    

    try {
        const username = await User.findOne({ username: req.body.username});
        const email = await User.findOne({ email: req.body.email});
        if (!username && !email)
        {
            await user.save();
            console.log('user created');
            res.status(200).json({ user })
        }
        else if (username)
        {
            res.status(409).json({message: 'username already exist'})
        }
        else if (email)
        {
            res.status(409).json({message: 'email already exist'})
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { creatUser };