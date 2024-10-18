const express = require("express");

// const userRoute = require("./router/userRoute");
const cors = require("cors");
// const UserRoute = require("./models/UserModel");

const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const indexfile = require('./router/index')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/',indexfile)


// app.use("/user" , userRoute);







// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});

const uri =`mongodb+srv://admin01:admin01@cluster0.rei7tip.mongodb.net/Task_management?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})
