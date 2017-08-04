'use strict'

const message = function (msg, option) {
  if (option === 'success') {

  } else {

  }
}

const clearForms = function () {
  //  master functin to clear value of all forms

  // clear User signUp Forms
  $('#signUpEmail').val('')
  $('#signUpPassword').val('')
  $('#confirmPassword').val('')
}

module.exports = {
  message,
  clearForms
}
