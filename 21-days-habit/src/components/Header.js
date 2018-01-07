import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header>
        <button type="button" name="button" className="bt_back"></button>
        <span>{this.props.title}</span>
      </header>
    )
  }
}
