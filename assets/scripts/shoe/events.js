'use strict'
const shoeApi = require('./api.js')
const shoeUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const addShoe = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  shoeApi.add(data)
    .then(shoeUi.onAddSuccess)
    .catch(shoeUi.onAddError)
}

const deleteShoe = function () {
  const shoe = $(this).parent()
  const shoeId = $(this).parent().attr('data-shoe-id')
  shoeApi.destroy(shoeId)
    .then(shoeUi.onDestroySuccess)
    .catch(shoeUi.onDestroyError)
  shoe.css('display', 'none')
}

const addHandlers = () => {
  $('#addShoeForm').on('submit', addShoe)
  $('.deleteShoeBtn').on('click', deleteShoe)
}

module.exports = {
  addHandlers
}
