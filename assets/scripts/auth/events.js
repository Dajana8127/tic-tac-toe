'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  // prevent
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.userCreate(data)
    .then(ui.createSuccess)
    .then(() => onSignInAuto(data))
    .catch(ui.createFailure)
}

const onSignIn = function (event) {
  // prevent
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.userSignIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignInAuto = function (data) {
  api.userSignIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  // prevent
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
