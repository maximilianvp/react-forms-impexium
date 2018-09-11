import React from 'react'

import { Widget } from './Widget'

class App extends React.Component {
  render () {
    return (
      <div>
        App
        <br />
        <Widget uuid={1}/>
      </div>
    )
  }
}

export { App }
