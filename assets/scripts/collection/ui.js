'use strict'
const collectionStore = require('../store')
const showCollectionTemplate = require('../templates/collection.handlebars')

const onAddSuccess = function (data) {
  $('#createCollectionModal').modal('hide')
  console.log(data)
  // console.log('clear forms')
  // console.log('collection is added')
}
const onAddError = function (error) {
  console.log(error)
}

const onDeleteSuccess = function (data) {
  $('#content').empty()
}

const onDeleteError = function (error) {
  console.log(error)
}

const onShowSuccess = function (data) {
  $('#content').empty()
  const showCollectionHTML = showCollectionTemplate(data)
  $('#content').append(showCollectionHTML)
}

const onShowError = function (error) {
  console.log(error)
  console.log('try again buddy')
}

module.exports = {
  onAddSuccess,
  onAddError,
  onDeleteSuccess,
  onDeleteError,
  onShowSuccess,
  onShowError
}
