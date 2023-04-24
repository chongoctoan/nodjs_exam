const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.home = (req,res)=>{
    res.render("home");
}

exports.form = (req,res)=>{
    res.render("form");
}

exports.saveCreateUser = async (req,res)=>{
    let existUser = await User.findOne({username: req.body.username});
    if(existUser) res.status(422).send("User name is exist");

    // const salt = await bcrypt.genSalt(10);
    // const hashPwd = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        tel : req.body.tel,
        username: req.body.username,
        password : req.body.password
    });
    user.save().then(rs=>res.redirect("/user/")).catch(err=>res.send(err));
}

exports.list = (req, res)=>{
    User.find({}).then(rs=>{
        res.render("list",{
            items : rs
        })
    }).catch(err=>{
        res.send(err);
    });
}