'use strict'
const store = require('../store')
const showUserShoesTemplate = require('../templates/user-shoes.handlebars')
const showUserCollectionsTemplate = require('../templates/user-collections.handlebars')
const shoe = require('../shoe/events.js')
const collection = require('../collection/events.js')

const onSignUpSuccess = function () {
  $('#signUpEmail').val('')
  $('#signUpPassword').val('')
  $('#confirmPassword').val('')
  $('#signUpSuccess').css('display', 'block')
  $('#signUpError').css('display', 'none')
}

const onSignUpError = function () {
  $('#signUpError').css('display', 'block')
  $('#signUpSuccess').css('display', 'none')
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

const onUserShoesSuccess = function (data) {
  $('#content').empty()
  const showUserShoesHTML = showUserShoesTemplate({ shoes: data.user.shoes })
  $('#content').append(showUserShoesHTML)

  // event handlers
  $('.deleteShoeBtn').on('click', shoe.deleteShoe)
  $('.viewShoeBtn').on('click', shoe.viewShoe)
  $('.editShoeBtn').on('click', shoe.openEditModal)
  $('#editShoeForm').on('submit', shoe.editShoe)
}

const onUserShoesError = function (error) {
  console.log(error)
}

const onUserCollectionsSuccess = function (data) {
  console.log(data.user)
  $('#content').empty()
  const showUserCollectionsHTML = showUserCollectionsTemplate({ collections: data.user.collections })
  $('#content').append(showUserCollectionsHTML)

  // EVENT LISTNERS FOR COLLECTION ACTIONS
  $('.deleteCollectionBtn').on('click', collection.deleteCol)
  $('.viewCollectionBtn').on('click', collection.showCol)
  $('.editCollectionBtn').on('click', collection.openEditColModal)
  $('#editColForm').on('submit', collection.editCol)
}

const onUserCollectionsError = function (error) {
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
  onChangePwdError,
  onUserShoesSuccess,
  onUserShoesError,
  onUserCollectionsSuccess,
  onUserCollectionsError
}
