import React from 'react'

import { Widget } from './Widget'

class App extends React.Component {
  render () {
    const props = {
      uuid: 1
    }
    return (
      <div>
        App123
        <br />
        <Widget {...props} />
      </div>
    )
  }
}

export { App }
