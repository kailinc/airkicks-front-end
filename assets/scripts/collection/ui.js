'use strict'
const collectionStore = require('../store')

const onAddSuccess = function (data) {
  $('#createCollectionModal').modal('hide')
  console.log(data)
  console.log('clear forms')
  console.log('collection is added')
}
const onAddError = function (error) {
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError
}