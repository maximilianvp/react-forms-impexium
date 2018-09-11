return createReactClass({

  render: function () {
    const { Button } = this.props
    return React.createElement('div', null, [
      React.createElement('br', null, null),
      React.createElement(Button, { label: 'Test' }, null),
      'Some content',
      React.createElement('br', null, null),
      React.createElement('br', null, null),
    ])
  }

})
