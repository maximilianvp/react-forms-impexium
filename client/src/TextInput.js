import React from 'react'

class TextInput extends React.Component {

  constructor () {
    super()

    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput (event) {
    this.props.onChange(event.target.value)
  }

  render () {
    const {
      value,
      label,
    } = this.props

    return (
      <div>
        <label>{label}</label>
        <input onChange={this.handleChangeInput} value={value} />
      </div>
    )
  }

}

export { TextInput }
