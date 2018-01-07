import React, { Component } from 'react'
import { login, resetPassword, facebookAuth } from '../helpers/auth'
import Header from './Header'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }
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
  }
  render () {
    return (
      <div>
      <Header title='' />
        <div className="tit_style1">Log in</div>
        <form onSubmit={this.handleSubmit}>
          <section className="input_wrap">
            <section className="input_box">
              <label htmlFor="email">E-mail</label>
              <input type="text" ref={(email) => this.email = email} placeholder="이메일을 입력해주세요" id="email" />
            </section>
            <section className="input_box">
              <label for="password">Password</label>
              <input type="password" ref={(pw) => this.pw = pw} placeholder="비밀번호를 입력해주세요" id="password" />
            </section>
          </section>
          {
            this.state.loginMessage &&
            <div className="tit_style1" >
              &nbsp;{this.state.loginMessage}
            </div>
          }
          <section className="bt_wrap_hor_box">
            <section className="bt_wrap_hor">
              <button type="button" name="button" className="bt_white">회원가입</button>
              <button type="submit" name="button" className="bt_blue">로그인</button>
            </section>
          </section>
          <section className="bt_wrap_ver_box">
            <div className="title">OR</div>
              <button type="button" name="button" className="bt_facebook">페이스북 계정으로 로그인</button>
              <button type="button" name="button" className="bt_google">구글 계정으로 로그인</button>
          </section>

          <button type="button" className="bt_gray">
            계정을 잊으셨나요?
          </button>
        </form>
      </div>
    )
  }
}
