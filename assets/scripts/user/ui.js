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
  $('#signUpEmail').val('')
  $('#signUpPassword').val('')
  $('#confirmPassword').val('')
}

const onSignInSuccess = function (data) {
  $('#landingPage').css('display', 'none')
  $('#innerPage').css('display', 'block')
  store.user = data.user
  $('#errorNotify').css('display', 'none')
  $('#loginEmail').val('')
  $('#loginPassword').val('')
  $('#content').empty()
}

const onSignInError = function (error) {
  $('#loginEmail').val('')
  $('#loginPassword').val('')
  $('#errorNotify').css('display', 'block').text("Either the password/username doesn't match or the account is taken.")
  console.log(error)
}

const onChangePwdSuccess = function () {
  $('#changePwdModal').modal('hide')
  $('#successNotify').css('display', 'block').text('You have changed your password')
  $('#errorNotify').css('display', 'none')
  $('#changePwdOld').val('')
  $('#changePwdNew').val('')
}
const onChangePwdError = function (error) {
  console.log(error)
  $('#changePwdModal').modal('hide')
  $('#changePwdOld').val('')
  $('#changePwdNew').val('')
  $('#errorNotify').css('display', 'block').text('The password you gave was wrong')
  $('#successNotify').css('display', 'none')
}

const onLogOutSuccess = function () {
  // console.log('logged out')
  store.user = null
  $('#landingPage').css('display', 'block')
  $('#innerPage').css('display', 'none')
  $('#errorNotify').css('display', 'none')
  $('#successNotify').css('display', 'none')
  $('#signUpSuccess').css('display', 'none')
  $('#signUpError').css('display', 'none')
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
