const express =require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server is running");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));