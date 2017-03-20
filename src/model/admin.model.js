
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  username:String,
  password:String,
  avatar:String,
})

AdminSchema.methods.validPassword = function (password) {
  return password === this.password 
}

module.exports = mongoose.model('Admin',AdminSchema)