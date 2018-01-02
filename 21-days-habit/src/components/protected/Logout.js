import React, { Component } from 'react'
import { login, resetPassword, facebookAuth, logout, currentUser } from '../../helpers/auth'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

/*
function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}
*/

export default class Logout extends Component {
  state = { userEmail : null }
  componentDidMount () {
    let user = currentUser()
    if(user !== null){
      this.setState({
        userEmail: user.email
      })
    }
  }
  /*
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  facebookLogin = () => {
    facebookAuth()
      .then((authdata) => console.log(authdata))
      .catch(e => this.setState(setErrorMsg(e)))
  }*/
  render () {
    return (
      <BrowserRouter>
      <div>
        <div className="tit_style1">Log out</div>
        <form onSubmit={this.handleSubmit}>
          <section className="input_wrap">
            <section className="input_box">
              <label for="email">E-mail</label>
              <input type="text" value={this.state.userEmail} placeholder="이메일을 입력해주세요" id="email" readonly />
            </section>
          </section>
          <section className="bt_wrap_hor_box">
            <section className="bt_wrap_hor">
              <button type="button" name="button" className="bt_white">비밀번호변경</button>
              <button type="button" name="button" className="bt_blue" onClick={() => {
                logout()
              }}>로그아웃</button>
            </section>
          </section>

          <button type="button" className="bt_gray">
            회원탈퇴.. 정말 없애실 건가요..? ㅠ_ㅠ
          </button>
        </form>
      </div>
      </BrowserRouter>
    )
  }
}
