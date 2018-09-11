import React from 'react'

class Dropdown extends React.Component {

  constructor () {
    super()

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (event) {
    return this.props.onChange(event.target.value)
  }

  render () {
    const { options, value } = this.props
    return (
      <select onChange={this.handleSelect}>
        {options.map((option) => <option name={option} selected={option === value}>{option}</option>)}
      </select>
    )
  }

}

export { Dropdown }
