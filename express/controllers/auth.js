const crypto = require('crypto')
const mongoose = require('mongoose')
const { AuthModel } = require('../../mongo/models')

const SignUp = ({ userName, password }) => {
  if (!userName || !password) return Promise.reject('username and password are required!')
  const hash = crypto.createHash('md5').update(password).digest("hex")
  return AuthModel.create({ userName, password: hash })
}

const Login = ({ userName, password }) => {
  // contents of login function
  if (!userName || !password) return Promise.reject('username and password are required!')
  const hash = crypto.createHash('md5').update(password).digest("hex")
  return AuthModel.findOne({ userName, password: hash })
}

//In the controller, use the `AuthModel` to `findOne` user by it's `userName` and `password`. Remember to hash the password first.


module.exports = {
  SignUp,
  Login
}