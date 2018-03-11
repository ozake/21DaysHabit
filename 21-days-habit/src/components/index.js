import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Logout from './protected/Logout'
//import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import Main from './protected/Main'
import AddList from './protected/AddList'
//import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/main' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <PublicRoute authed={this.state.authed} path='/login' component={Login} />
              <PrivateRoute authed={this.state.authed} path='/logout' component={Logout} />
              <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
              <PrivateRoute authed={this.state.authed} path='/main' component={Main} />
              <PrivateRoute authed={this.state.authed} path='/addlist' component={AddList} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
