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

const showCol = function () {
  const collectionId = $(this).parent().attr('data-collection-id')
  collectionApi.show(collectionId)
    .then(collectionUi.onShowSuccess)
    .catch(collectionUi.onShowError)
}

const openEditColModal = function () {
  const collectionId = $(this).parent().attr('data-collection-id')
  const colName = $(this).parent().attr('data-collection-name')
  const colDes = $(this).parent().attr('data-collection-description')
  $('#editColModal').modal('show')
  $('#editColId').text(collectionId)
  $('#editColName').val(colName)
  $('#editColDes').val(colDes)
}

const editCol = function (event) {
  event.preventDefault()
  const collectionId = $('#editColId').text()
  const data = getFormFields(event.target)
  collectionApi.update(data, collectionId)
    .then(collectionUi.onUpdateSuccess)
    .catch(collectionUi.onUpdateError)
}

const allCol = function () {
  $('#successNotify').css('display', 'none')
  $('#errorNotify').css('display', 'none')
  collectionApi.index()
    .then(collectionUi.onIndexSuccess)
    .catch(collectionUi.onIndexError)
}

const addHandlers = () => {
  $('#createCollectionForm').on('submit', addCollection)
  $('#allColBtn').on('click', allCol)
}

module.exports = {
  addHandlers,
  deleteCol,
  showCol,
  openEditColModal,
  editCol
}
