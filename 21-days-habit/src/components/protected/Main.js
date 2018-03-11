import React, { Component } from 'react'
import MainHeader from '../MainHeader'
import ListHeader from '../ListHeader'
import ListViewBox from './ListViewBox'

export default class Main extends Component {
  render () {
    return (
      <div>
        <MainHeader />
        <ListHeader />
        <ListViewBox />
        <button type="button" name="button" className="bt_add" onClick={()=> {window.location.href="/addlist"} }></button>
      </div>
    )
  }
}
