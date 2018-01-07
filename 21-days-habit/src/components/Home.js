import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="tit_style1">
          로그인이 필요한 서비스 입니다.
        </div>
        <button type="button" name="button" className="bt_gray" onClick={()=> {window.location.href="/login"} }>
          로그인하기
        </button>
      </div>
    )
  }
}
