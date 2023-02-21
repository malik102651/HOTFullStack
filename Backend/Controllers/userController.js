const asyncHandler = require("express-async-handler")
const User = require("../Models/userModel")
const generateToken = require("../Utils/generateToken")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exist")
    }
    console.log(name, email, password)

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
        //     console.log("user",user)
    } else {
        res.status(400);
        throw new Error("Error Occured!")
    }

});


const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    

    const user = await User.findOne({ email });

    console.log(user)

    if (user ) {
        console.log("find")
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password!")
    }



});

module.exports = { registerUser, authUser } 