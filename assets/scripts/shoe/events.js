'use strict'
const shoeApi = require('./api.js')
const shoeUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const user = require('../user/events.js')

const addShoe = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  shoeApi.add(data)
    .then(shoeUi.onAddSuccess)
    .catch(shoeUi.onAddError)
}

const viewShoe = function () {
  const shoeId = $(this).parent().attr('data-shoe-id')
  shoeApi.show(shoeId)
    .then(shoeUi.onShowSuccess)
    .catch(shoeUi.onShowError)
}

const deleteShoe = function () {
  const shoeId = $(this).parent().attr('data-shoe-id')
  shoeApi.destroy(shoeId)
    .then(shoeUi.onDestroySuccess)
    .catch(shoeUi.onDestroyError)
}

const addHandlers = () => {
  $('#addShoeForm').on('submit', addShoe)
}

module.exports = {
  addHandlers,
  addShoe,
  deleteShoe,
  viewShoe
}
