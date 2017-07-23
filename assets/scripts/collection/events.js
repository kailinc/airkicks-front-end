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

const addHandlers = () => {
  $('#createCollectionForm').on('submit', addCollection)
}

module.exports = {
  addHandlers
}
