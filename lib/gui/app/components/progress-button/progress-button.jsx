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
      disabled: false
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    state.disabled = props.shouldFlashStepBeDisabled || props.getLastFlashErrorCode
  }

  handleClick = () => {
    this.setState({ openBar: true })
    this.props.flash(this.props.image(),this.props.device())
  }

  render = () => {
    if (this.state.openBar) {
      return (
        <Bar percentage={this.props.percentage}/>
      )
    }
    else {
      return (
        <Provider>
          <Button primary onClick={this.handleClick} disabled={this.state.disabled}>
            {this.props.label}
          </Button>
        </Provider>
      )
    }
  }
}

class Bar extends React.Component {

  constructor(percentage) {
    super(percentage)
    console.log(this.props.percentage)
    this.state = {
      value: 0
    }
  }

  componentDidMount = () => {
    console.log("componentdidmount: ", this.props.percentage().percentage)
    this.setState({value: this.props.percentage().percentage})
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
  percentage: propTypes.func,
  label: propTypes.string,
  shouldFlashStepBeDisabled: propTypes.func,
  getLastFlashErrorCode: propTypes.func,
  flash: propTypes.func,
  image: propTypes.func,
  device: propTypes.func,
  flash: propTypes.func
}

module.exports = ProgressButton
