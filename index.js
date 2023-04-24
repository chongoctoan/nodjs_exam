require("dotenv").config();
const database = require("./src/database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Sever is running...");
})

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRouter = require("./src/routes/user.router");
app.use("/user" ,userRouter);