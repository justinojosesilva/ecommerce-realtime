'use strict'

class AuthRegister {
  get rules () {
    return {
      // validation 
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed'
    }
  }
}

module.exports = AuthRegister
