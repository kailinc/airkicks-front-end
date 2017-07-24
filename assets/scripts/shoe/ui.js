'use strict'
const shoeStore = require('../store')
const user = require('../user/events.js')
const showShoeTemplate = require('../templates/shoe.handlebars')

const onAddSuccess = function (data) {
  $('#addShoeModal').modal('hide')
  $('#successNotify').css('display', 'block').text('Your shoe has been added.')
  $('#errorNotify').css('display', 'none')
  $('#addShoeName').val('')
  $('#addShoeBrand').val('')
  $('#addShoeCap').val('')
}
const onAddError = function (error) {
  $('#addShoeModal').modal('hide')
  $('#errorNotify').css('display', 'block').text('There was a problem adding your shoe.')
  $('#successNotify').css('display', 'none')
  $('#addShoeName').val('')
  $('#addShoeBrand').val('')
  $('#addShoeCap').val('')
  console.log(error)
}

const onDestroySuccess = function (data) {
  $('#content').empty()
  console.log(data)
}

const onDestroyError = function (error) {
  console.log(error)
}

const onShowSuccess = function (data) {
  $('#content').empty()
  const showShoeHTML = showShoeTemplate(data)
  $('#content').append(showShoeHTML)
}

const onShowError = function (error) {
  console.log(error)
}

const onUpdateSuccess = function (data) {
  console.log('ok')
  $('#content').empty()
  $('#editShoeModal').modal('hide')
}

const onUpdateError = function (error) {
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError,
  onDestroySuccess,
  onDestroyError,
  onShowSuccess,
  onShowError,
  onUpdateError,
  onUpdateSuccess
}
