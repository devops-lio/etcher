const React = require('react')
const ReactDOM = require('react-dom')
const propTypes = require('prop-types')

import styled, { ThemeProvider } from 'styled-components'
import { Button, ProgressBar, Provider } from 'rendition'

import createTheme from 'styled-components-theme'
// import theme from './../../scss/modules/_theme'

const StyledButton = styled(Button).attrs({
  className: "flash-button"
})``

const StyledProgressBar = styled(ProgressBar).attrs({
  className: "flash-progress-bar"
})``

export default class ProgressButton extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      disabled: false,
      striped: false
    }
  }

  static getDerivedStateFromProps (props, state) {
    state.disabled = props.shouldFlashStepBeDisabled || props.getLastFlashErrorCode
    state.striped = props.striped == 'check'
  }

  handleClick = () => {
    this.setState({ openBar: true })
    this.props.flash(this.props.image(),this.props.device())
  }

  render () {
    console.log(this.props.active)
    if (this.props.active) {
      return (
        <Provider>
          <StyledProgressBar
            primary
            emphasized
            value={this.props.percentage}
            striped={this.state.striped}
          >
            {this.props.label}
          </StyledProgressBar>
        </Provider>
      )
    }
    else {
      return (
        <Provider>
          <StyledButton
            primary
            onClick={this.handleClick}
            disabled={this.state.disabled}
          >
            {this.props.label}
          </StyledButton>
        </Provider>
      )
    }
  }
}

ProgressButton.propTypes = {
  striped: propTypes.func,
  active: propTypes.func,
  percentage: propTypes.number,
  label: propTypes.string,
  shouldFlashStepBeDisabled: propTypes.func,
  getLastFlashErrorCode: propTypes.func,
  flash: propTypes.func,
  image: propTypes.func,
  device: propTypes.func,
}

module.exports = ProgressButton
