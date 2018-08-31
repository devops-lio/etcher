const React = require('react')
const ReactDOM = require('react-dom')
const rendition = require('rendition')
const propTypes = require('prop-types')

class ProgressButton extends React.Component {

  render () {
    return (
      <rendition.Provider>
        <rendition.ProgressBar>
        </rendition.ProgressBar>
      </rendition.Provider>
    );
  }
}

ProgressButton.propTypes = {
  path: propTypes.string,
}

module.exports = ProgressButton
