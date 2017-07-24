'use strict'
const store = require('../store')
const shoeStore = require('../shoeStore')
const config = require('../config.js')

const add = function (data) {
  console.log(store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/collections',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/collections/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  add,
  destroy
}
