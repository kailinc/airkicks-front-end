'use strict'
const collectionApi = require('./api.js')
const collectionUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const addShoe = function (e) {
  // e.preventDefault()
  // const data = getFormFields(e.target)
  // // console.log(data)
  // shoeApi.add(data)
  //   .then(shoeUi.onAddSuccess)
  //   .catch(shoeUi.onAddError)
}

const addHandlers = () => {
  // $('#addShoeForm').on('submit', addShoe)
}

module.exports = {
  addHandlers
}
