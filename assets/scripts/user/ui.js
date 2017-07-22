'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  console.log('good job')
}

const onSignUpError = function (error) {
  alert('try again buddy')
  console.log('either the pass words don\'t match or it is taken')
  console.log(error)
}

// const onSignInSuccess = function (data) {
//   store.user = data.user
//   $('.signIn input').css('background-color', '#228a11')
//   $('.userOut').css('display', 'block')
//   $('.userIn').css('display', 'none')
//   $('#signInMsg').text('')
// }
// const onSignInError = function () {
//   $('.signIn input').css('background-color', 'red')
//   $('#signInMsg').text('Either you ented your username/password wrong or the account does not exist').css('color', 'white')
// }
//
// const onChangeSuccess = function () {
//   $('.changePassword input').css('background-color', '#228a11')
//   $('#signInMsg').text('Your password is successfully changed!')
// }
// const onChangeError = function () {
//   $('.changePassword input').css('background-color', 'red')
//   $('#signInMsg').text('There was a problem with changing password')
// }
//
// const onLogOutSuccess = function () {
//   // console.log('logged out')
//   store.user = null
//   $('#board li').removeClass('disable').removeClass('x').removeClass('o').text(' ')
//   $('.userForms input').css('background-color', 'white')
//   $('.userOut').css('display', 'none')
//   $('.userIn').css('display', 'block')
//   $('#gameResult').text('Tic Tac Toe')
//   $('#signInMsg').text('')
//   $('.totalWins h3').text('')
//   $('.localStats').text('0')
// }
//
// const onLogOutError = function () {
//   // console.log(error)
// }

module.exports = {
  onSignUpSuccess,
  onSignUpError
  // onSignInSuccess,
  // onSignInError,
  // onLogOutSuccess,
  // onLogOutError,
  // onChangeSuccess,
  // onChangeError
}
