'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  console.log('good job')
  console.log('sign it in or go to the top of the page')
}

const onSignUpError = function (error) {
  alert('try again buddy')
  console.log('either the pass words don\'t match or it is taken')
  console.log(error)
}

const onSignInSuccess = function (data) {
  $('#landingPage').css('display', 'none')
  $('#innerPage').css('display', 'block')
  store.user = data.user
}
const onSignInError = function (error) {
  console.log('Either the password is wrong or the account does not exist')
  console.log(error)
}

const onChangePwdSuccess = function () {
  $('#changePwdModal').modal('hide')
  console.log('you have changed your password')
  console.log('clear forms')
}
const onChangePwdError = function (error) {
  console.log(error)
  alert('try again buddy')
  console.log('clear forms')
  console.log('password not correct')
}

const onLogOutSuccess = function () {
  // console.log('logged out')
  store.user = null
  $('#landingPage').css('display', 'block')
  $('#innerPage').css('display', 'none')
  console.log('clear all forms')
}

const onLogOutError = function (error) {
  console.log(error)
}

// have a function to clear all forms
module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onLogOutSuccess,
  onLogOutError,
  onChangePwdSuccess,
  onChangePwdError
}
