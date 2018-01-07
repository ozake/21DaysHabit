import React, { Component } from 'react'
import Header from '../Header'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <Header title={ this.props.headerTitle }/>
      </div>
    )
  }
}
Dashboard.defaultProps = {
    headerTitle: 'Category',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
}
