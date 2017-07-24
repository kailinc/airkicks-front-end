'use strict'
const shoeStore = require('../store')
const user = require('../user/events.js')
const showShoeTemplate = require('../templates/shoe.handlebars')

const onAddSuccess = function (data) {
  $('#addShoeModal').modal('hide')
  // console.log(data)
  console.log('clear forms')
  console.log('shoe is added')
}
const onAddError = function (error) {
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
