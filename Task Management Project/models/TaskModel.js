const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
{
Title: {
type: String, 
},
Description: {
type: String, 
},
Status: {
type: String, 
},
Files: {
type: String, 
},
Created_at: {
type: Date, 
default : Date.now, 
},
Update_at: {
type: Date, 
default : Date.now, 
},
Created_By: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: User",
},
Update_By: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: User",
},
},
);





module.exports = mongoose.model("Task", TaskSchema);
