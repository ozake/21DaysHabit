import React, { Component } from 'react'

export default class ListHeader extends Component {
  render () {
    return (
      <div className="list_header">
        <nav>
          <input type="radio" name="menu" value="" id="menu_doing" checked />
          <input type="radio" name="menu" value="" id="menu_clear" />
          <label htmlFor="menu_doing"><span>Doing</span><span>5</span></label>
          <label hamlFor="menu_clear"><span>clear</span><span>2</span></label>
        </nav>
        <div className="select">
          <input type="checkbox" name="" value="" id="list_view_type" />
          <label htmlFor="list_view_type">정렬 순서</label>
          <div className="list_view_type">
            <button type="button" name="button">시작일순</button>
            <button type="button" name="button">종료일순</button>
          </div>
        </div>
      </div>
    )
  }
}
