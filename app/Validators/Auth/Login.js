'use strict'

class Login {
  get rules () {
    return {
      // validation rules
      email: 'required|email',
      password:'required'
    }
  }

  get messages() {
    return {
      'email.required': 'O e-mail já existe',
      'password.required': 'A senha não foi informada'
    }
  }
}

module.exports = Login
