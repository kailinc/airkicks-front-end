'use strict'
const shoeStore = require('../store')
const user = require('../user/events.js')
const showShoeTemplate = require('../templates/shoe.handlebars')
const showShoesTemplate = require('../templates/shoes.handlebars')
const uiActions = require('../uiActions.js')

const onAddSuccess = function (data) {
  uiActions.clearForms()
  $('#addShoeModal').modal('hide')
  $('#content').empty()
  $('#successNotify').css('display', 'block').text('Your shoe has been added.')
  $('#errorNotify').css('display', 'none')
}

const onAddError = function (error) {
  uiActions.clearForms()
  $('#addShoeModal').modal('hide')
  $('#content').empty()
  $('#errorNotify').css('display', 'block').text('There was a problem adding your shoe.')
  $('#successNotify').css('display', 'none')
}

const onDestroySuccess = function (data) {
  $('#content').empty()
  $('#successNotify').css('display', 'block').text('Your shoe has been deleted.')
  $('#errorNotify').css('display', 'none')
}

const onDestroyError = function (error) {
  $('#errorNotify').css('display', 'block').text('There was a problem deleting your shoe.')
  $('#successNotify').css('display', 'none')
  // console.log(error)
}

const onShowSuccess = function (data) {
  $('#content').empty()
  const showShoeHTML = showShoeTemplate(data)
  $('#content').append(showShoeHTML)
}

const onShowError = function (error) {
  // console.log(error)
}

const onUpdateSuccess = function (data) {
  $('#content').empty()
  $('#editShoeModal').modal('hide')
  $('#successNotify').css('display', 'block').text('Your shoe has been updated.')
  $('#errorNotify').css('display', 'none')
}

const onUpdateError = function (error) {
  // console.log(error)
  $('#editShoeModal').modal('hide')
  $('#content').empty()
  $('#errorNotify').css('display', 'block').text('There was a problem updating your shoe.')
  $('#successNotify').css('display', 'none')
}

const onIndexSuccess = function (data) {
  // console.log(data.shoes)
  $('#content').empty()
  const showShoesHTML = showShoesTemplate({ shoes: data.shoes })
  $('#content').append(showShoesHTML)
}

const onIndexError = function (error) {
  // console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError,
  onDestroySuccess,
  onDestroyError,
  onShowSuccess,
  onShowError,
  onUpdateError,
  onUpdateSuccess,
  onIndexSuccess,
  onIndexError
}
