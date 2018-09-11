import React from 'react'

class Button extends React.Component {

  render () {
    const { label } = this.props
    return (
      <button>{label}</button>
    )
  }

}

export { Button }
