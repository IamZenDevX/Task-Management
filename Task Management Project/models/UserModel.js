const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
{
email: {
type: String, 
required: true, 
},
password: {
type: String, 
select: false, 
required: true, 
},
},
);


UserSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, 10);
});



module.exports = mongoose.model("User", UserSchema);
