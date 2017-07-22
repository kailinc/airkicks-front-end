'use strict'
const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  userApi.add(data)
    .then(userUi.onSignUpSuccess)
    .catch(userUi.onSignUpError)
}

const onSignIn = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onLogOut = function () {
  userApi.logOut()
    .then(userUi.onLogOutSuccess)
    .catch(userUi.onLogOutError)
}

const onChangePwd = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  userApi.changePwd(data)
    .then(userUi.onChangePwdSuccess)
    .catch(userUi.onChangePwdError)
}
const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#logOutBtn').on('click', onLogOut)
  $('#changePwd').on('submit', onChangePwd)
}

module.exports = {
  addHandlers
}
