const ErrorHandler = require('../utils/default/errorHandler');
const Task = require('../models/TaskModel');


exports.CreateTask = async(req, res, next) => {
const {Created_at, Created_By, Description, Files, Status, Title, Update_at, Update_By} = req.body;
let createdTask;
createdTask = await Task.create({
Created_at, 
Title, 
Created_By, 
Update_at, 
Files, 
Description, 
Update_By, 
Status, 
});
await createdTask.save();
res.json(createdTask);



}

exports.DeleteTask = async(req, res, next) => {
const {id} = req.params;
const deletedTask = await Task.findByIdAndDelete(id);
res.json(deletedTask);



}

exports.GetTask = async(req, res, next) => {
const {UserID} = req.params;
let var_Task_List;
try {
 var_Task_List = await Task.find(
{
Created_By: UserID
},'Files Update_at Title Created_at Status Description Created_By Update_By ');
} catch (err) {
const error = new ErrorHandler(
'Select Valid User !',
500
);
return next(error);
}
res.json(var_Task_List);



}

exports.PutTask = async(req, res, next) => {
const {Created_By, Created_at, Description, Files, Status, Title, Update_By, Update_at} = req.body;
const {ID} = req.params;
const updatedTask = await Task.findByIdAndUpdate(ID,
{
Title: Title,
Update_at: Update_at,
Description: Description,
Files: Files,
Update_By: Update_By,
Status: Status
}
, {new: true} );
res.json(updatedTask);



}




