import React from 'react'

import { Dropdown } from './Dropdown'

class IndividualField extends React.Component {

  constructor () {
    super()

    this.renderField = this.renderField.bind(this)
    this.handleChangeField = this.handleChangeField.bind(this)
    this.state = {
      options: [],
    }
  }

  componentDidMount () {
    const { field } = this.props

    if (field === 'customFields["region"]') {
      fetch(`http://127.0.0.1:1337/fieldoptions/individual?type=custom&name=region`)
      .then((response) => response.json())
      .then(({ regions }) => this.setState({ options: regions }))
    }
  }

  handleChangeField (value) {
    return this.props.onChange(value)
  }

  renderField (field, value) {
    if (field === 'customFields["region"]') {
      const { options } = this.state
      return (
        <Dropdown options={options} onChange={this.handleChangeField} value={value} />
      )
    } else if (field === 'customFields["age"]') {
      return (
        <input type="number" onChange={this.handleChangeNumber} value={value} />
      )
    } else {
      return null
    }
  }

  render () {
    const { field, label, value } = this.props

    return (
      <div>
        <label>{label}</label>
        {this.renderField(field, value)}
      </div>
    )
  }

}

export { IndividualField } 
