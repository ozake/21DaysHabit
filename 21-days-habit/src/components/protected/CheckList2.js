import React, { Component } from 'react'

export default class CheckList2 extends Component {
  render () {
    return (
      <div className="check_list2">
        <input type="checkbox" name="" value="" id={"bookmark"+this.props.key} className="bookmark" />
        <label htmlFor={"bookmark"+this.props.key} className="bookmark">{this.props.Name}</label>
      </div>
    )
  }
}
