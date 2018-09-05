import * as angular from 'angular';
import { react2angular } from 'react2angular';

const MODULE_NAME = 'Etcher.Components.ProgressButton'
const ProgressButton = angular.module(MODULE_NAME, [])

ProgressButton.component(
  'progressButton',
  react2angular(require('./progress-button.jsx'))
)

module.exports = MODULE_NAME
