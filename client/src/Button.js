import React from 'react'

const style = {
  backGroundColor: 'green',
}

class Button extends React.Component {

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick()
  }

  render () {
    const { label } = this.props
    return (
      <button
        onClick={this.handleClick}
        {...style}
      >
        {label}
      </button>
    )
  }

}

export { Button }
