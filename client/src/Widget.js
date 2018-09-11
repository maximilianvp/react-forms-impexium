import React from 'react'
import createReactClass from 'create-react-class'
import { Button } from './Button'

class Widget extends React.Component {

  constructor () {
    super()

    this.state = {
      widget: null,
    }
  }

  componentDidMount () {
    const { uuid } = this.props
    fetch(`http://127.0.0.1:1337/widget/${uuid}`)
      .then((response) => response.json())
      .then(({ widget }) => {
        this.setState({
          widget: new Function('React', 'createReactClass', atob(widget))(React, createReactClass)
        })
      })
  }

  render() {
    const { widget } = this.state
    if (!widget) {
      return 'no widget yet'
    }
    const bindings = {
      Button,
    }
    return (
      <div>
        {React.createElement(widget, bindings)}
      </div>
    )
  }
}

export { Widget }
