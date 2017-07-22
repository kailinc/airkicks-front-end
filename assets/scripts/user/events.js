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

const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
