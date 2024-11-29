const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const indexfile = require('./router/index')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/',indexfile)


// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});

const uri =`mongodb+srv://name:password@cluster0.rei7tip.mongodb.net/Task_management?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})
