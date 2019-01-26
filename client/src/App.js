import React, { Component } from 'react'
import { subscribeToData } from './utils/DataHandler'

class App extends Component {
  state = {
    count: null
  }

  constructor(props) {
    super(props)
    subscribeToData((err, data) => this.setState({ count: data }))
  }
  render() {
    return (
      <div className='App'>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default App
