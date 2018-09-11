import React from 'react'
import createReactClass from 'create-react-class'
import { Button } from './Button'
import { TextInput } from './TextInput'
import { IndividualField } from './IndividualField'

const api = {
  saveForm: ({ formContent }) => {
    const bodyToPost = {
      formContent,
      userName: 'navid',
    }
    fetch('http://127.0.0.1:1337/api',
      {
        method: 'POST',
        body: JSON.stringify(bodyToPost),
        headers: {
          "Content-Type": "application/json"
        },
      })
    .then((response) => response.json())
    .then(({ code }) => console.log(`Successful? ${code}`))
  }
}

class Widget extends React.Component {

  constructor () {
    super()

    this.state = {
      sourceCode: null,
    }
  }

  componentDidMount () {
    const { uuid } = this.props
    fetch(`http://127.0.0.1:1337/widget/${uuid}`)
      .then((response) => response.json())
      .then(({ widget }) => {
        const fn = new Function('React', 'createReactClass', atob(widget))
        const sourceCode = fn(React, createReactClass)
        this.setState({
          sourceCode
        })
      })
  }

  render() {
    const { sourceCode } = this.state
    if (!sourceCode) {
      return 'no sourceCode yet'
    }
    const props = {
      widgets: {
        Button,
        TextInput,
        IndividualField,
      },
      api,
    }
    return (
      <div>
        {React.createElement(sourceCode, props)}
      </div>
    )
  }
}

export { Widget }
