const React = require('react')
const ReactDOM = require('react-dom')
const propTypes = require('prop-types')

import { Button, ProgressBar, Provider } from 'rendition';

export default class ProgressButton extends React.Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openBar: false,
      disabled: props.disabled,
      percentage: props.percentage,
      label: props.label
    }
  }

  handleClick () {
    this.setState({ openBar: true })
  }

  render () {
    if (this.state.openBar) {
      return (
        <Bar props={this.state.percentage}/>
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

    console.log({props})
    this.state = {
      value: this.props
    }
  }

  render () {
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
  striped: propTypes.boolean,
  percentage: propTypes.number,
  label: propTypes.string,
  disabled: propTypes.boolean
}

module.exports = ProgressButton
