'use strict'
const store = require('../store')
const config = require('../config.js')

const add = function (data) {
  // console.log(store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/shoes',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/shoes/' + data,
    method: 'GET'
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/shoes/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/shoes/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/shoes',
    method: 'GET'
  })
}

module.exports = {
  add,
  destroy,
  show,
  update,
  index
}
