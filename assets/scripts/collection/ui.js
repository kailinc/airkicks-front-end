'use strict'
const collectionStore = require('../store')
const showCollectionTemplate = require('../templates/collection.handlebars')

const onAddSuccess = function (data) {
  $('#createCollectionModal').modal('hide')
  $('#successNotify').css('display', 'block').text('Your collection is created.')
  $('#errorNotify').css('display', 'none')
  $('#addColDes').val('')
  $('#addColName').val('')
}
const onAddError = function (error) {
  console.log(error)
  $('#errorNotify').css('display', 'block').text('There was a problem creating your collection.')
  $('#successNotify').css('display', 'none')
  $('#addColDes').val('')
  $('#addColName').val('')
}

const onDeleteSuccess = function (data) {
  $('#content').empty()
  $('#successNotify').css('display', 'block').text('The collection has been deleted.')
  $('#errorNotify').css('display', 'none')
}

const onDeleteError = function (error) {
  console.log(error)
  $('#errorNotify').css('display', 'block').text('There was a problem deleting the collection.')
  $('#successNotify').css('display', 'none')
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

const onUpdateSuccess = function (data) {
  $('#content').empty()
  $('#editColModal').modal('hide')
}

const onUpdateError = function (error) {
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddError,
  onDeleteSuccess,
  onDeleteError,
  onShowSuccess,
  onShowError,
  onUpdateSuccess,
  onUpdateError
}
