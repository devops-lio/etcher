'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const propTypes = require('prop-types')

import { Button, ProgressBar, Provider } from 'rendition';

export default class ProgressButton extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      openBar: false,
      percentage: this.props.percentage,
      label: this.props.label,
      disabled: this.props.shouldFlashStepBeDisabled || this.props.getLastFlashErrorCode
    }
  }

  static getDerivedStateFromProps = (props, state) =>
    state.disabled = props.shouldFlashStepBeDisabled || props.getLastFlashErrorCode

  handleClick = () =>
    this.setState({ openBar: true })

  render = () => {
    console.log(this.state)
    if (this.state.openBar) {
      return (
        <Bar props={this.state}/>
      )
    }
    else {
      return (
        <Provider>
          <Button primary onClick={this.handleClick} disabled={this.state.disabled}>
            {this.state.label}
          </Button>
        </Provider>
      )
    }
  }
}

class Bar extends React.Component {

  constructor(props) {
    super(props)

    console.log(this.props)

    this.state = {
      value: this.props.percentage
    }
  }

  render = () => {
    return (
      <Provider>
        <ProgressBar primary emphasized value={this.state.value}>
          {this.state.value}%
        </ProgressBar>
      </Provider>
    )
  }
}

ProgressButton.propTypes = {
  percentage: propTypes.number,
  label: propTypes.string,
  shouldFlashStepBeDisabled: propTypes.func,
  getLastFlashErrorCode: propTypes.func
}

module.exports = ProgressButton
