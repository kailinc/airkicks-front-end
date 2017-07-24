'use strict'
const collectionApi = require('./api.js')
const collectionUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const addCollection = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  collectionApi.add(data)
    .then(collectionUi.onAddSuccess)
    .catch(collectionUi.onAddError)
}

const deleteCol = function () {
  const collectionId = $(this).parent().attr('data-collection-id')
  collectionApi.destroy(collectionId)
    .then(collectionUi.onDeleteSuccess)
    .catch(collectionUi.onDeleteError)
}
const addHandlers = () => {
  $('#createCollectionForm').on('submit', addCollection)
}

module.exports = {
  addHandlers,
  deleteCol
}
