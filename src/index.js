import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import InitialStyles from './common/stylesheets/index.css'
import{ Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Layout from './containers/layout'
import AppContainer from './containers/app'

const req = require.context("./common/images", true, /\.svg$|.png$/)
req.keys().forEach( (key) => {
    req(key)
})


console.log(browserHistory)
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout} path="/">
      <IndexRedirect to="/catalog"/>
      <Route component={AppContainer} path="/catalog"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react'))
