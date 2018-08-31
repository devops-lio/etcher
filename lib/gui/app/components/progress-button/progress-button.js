import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Box, Provider } from 'rendition';

class ProgressButton extends React.Component {

  render () {
    return (
      <Provider>
        <ProgressBar>
        </ProgressBar>
      </Provider>
    );
  }
}

export default App;
