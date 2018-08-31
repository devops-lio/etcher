const angular = require('angular')
const react2angular = require('react2angular').react2angular

const MODULE_NAME = 'Etcher.Components.ProgressButton'
const ProgressButton = angular.module(MODULE_NAME, [])

ProgressButton.component('progressButton', react2angular(require('./button.jsx')))

module.exports = MODULE_NAME
