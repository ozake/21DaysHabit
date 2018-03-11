import React, { Component } from 'react'

export default class MainHeader extends Component {
  render () {
    return (
      <header>
        <span>21Days Habits</span>
        <div>
          <a href="#">
            <img src={'images/bt_category.png'} alt="카테고리 이동"/>
          </a>
          <a href="#">
            <img src={'images/bt_login.png'} alt="계정 정보 이동"/>
          </a>
        </div>
      </header>
    )
  }
}
