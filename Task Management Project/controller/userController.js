const ErrorHandler = require('../utils/default/errorHandler');
const User = require('../models/UserModel');


exports.deleteuser = async (req, res, next) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);



}

exports.GetUser = async (req, res, next) => {
    const { Id } = req.params;
    let var_User_List;
    var_User_List = await User.findById(Id, 'password email ');
    res.json(var_User_List);



}

exports.Login = async (req, res, next) => {
    const { email, password } = req.body;
    let var_User_List1;
    try {
        try {
            var_User_List1 = await User.find(
                {
                    email
                }, 'password email ');
        } catch (err) {
            const error = new ErrorHandler(
                'Signing Up Failed ! Please Try Again Later .',
                400
            );
            return next(error);
        }
        if (var_User_List1) {
            res.send("Login successfully");
           
    
        }
        else { const error = new ErrorHandler(
            'User Exists Already ,Please Login Instead .',
            422
        );
        return next(error);
          
        }
    } catch (err) {
    }
   



}

exports.PutUser = async (req, res, next) => {
    const { email, password } = req.body;
    const { Id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(Id,
        {
            email: email,
            password: password
        }
        , { new: true });
    res.json(updatedUser);



}

exports.Registration = async (req, res, next) => {
    const { password, email } = req.body;
    let createdUser;
    createdUser = await User.create({
        password,
        email,
    });
    await createdUser.save();
    res.json(createdUser);



}




