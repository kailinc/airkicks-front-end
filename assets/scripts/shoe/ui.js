'use strict'
const shoeStore = require('../store')
const user = require('../user/events.js')

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
  console.log('shoe is deleted')
}

const onDestroyError = function (error) {
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError,
  onDestroySuccess,
  onDestroyError
}
