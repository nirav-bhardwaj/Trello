const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://bhardwajnirav7_db_user:dhM7VmIyn6E1oAmV@100xapps.dn8hxou.mongodb.net/trello");

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organizationSchema = mongoose.Schema({
    title: String,
    description: String,
    admin: mongoose.Types.ObjectId,
    members: [mongoose.Types.ObjectId]
})

const organizationModel = mongoose.model("organizations", organizationSchema);
const userModel = mongoose.model("users", userSchema);

module.exports = {
    organizationModel,
    userModel
}