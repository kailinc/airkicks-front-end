'use strict'
const shoeStore = require('../store')

const onAddSuccess = function (data) {
  $('#addShoeModal').modal('hide')
  // console.log(data)
  console.log('clear forms')
}
const onAddError = function (error) {
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError
}
