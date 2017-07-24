'use strict'
const shoeApi = require('./api.js')
const shoeUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const user = require('../user/events.js')

const addShoe = function (e) {
  e.preventDefault()
  if ($('#addShoeBrand').val() === '') {
    $('#addShoeModal').modal('hide')
    $('#errorNotify').css('display', 'block').text('There was a problem adding your shoe.')
    $('#successNotify').css('display', 'none')
    $('#addShoeName').val('')
    $('#addShoeBrand').val('')
    $('#addShoeCap').val('')
  } else {
    const data = getFormFields(e.target)
    // console.log(data)
    shoeApi.add(data)
      .then(shoeUi.onAddSuccess)
      .catch(shoeUi.onAddError)
  }
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

const editShoe = function (event) {
  event.preventDefault()
  const shoeId = $('#editShoeId').text()
  const data = getFormFields(event.target)
  shoeApi.update(data, shoeId)
    .then(shoeUi.onUpdateSuccess)
    .catch(shoeUi.onUpdateError)
}

const openEditModal = function () {
  const shoeId = $(this).parent().attr('data-shoe-id')
  const shoeName = $(this).parent().attr('data-shoe-name')
  const shoeBrand = $(this).parent().attr('data-shoe-brand')
  const shoeCap = $(this).parent().attr('data-shoe-cap')
  console.log(shoeCap, shoeBrand)
  $('#editShoeModal').modal('show')
  $('#editShoeId').text(shoeId)
  $('#editShoeName').val(shoeName)
  $('#editShoeBrand').val(shoeBrand)
  $('#editShoeCap').val(shoeCap)
}

const addHandlers = () => {
  $('#addShoeForm').on('submit', addShoe)
}

module.exports = {
  addHandlers,
  addShoe,
  deleteShoe,
  viewShoe,
  openEditModal,
  editShoe
}
