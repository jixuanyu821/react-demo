import React from 'react';
import {Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import App from '../App'
import Path from '../page/path'
import About from '../page/about'
class MyRouter extends React.Component{
  render() {
    return(
      <Router>
        {/* <Switch> */}
          <Route exact path='/' component={App}></Route>
          <Route path='/path' component={Path}></Route>
          <Route path='/About' component={About}></Route>
        {/* </Switch> */}
      </Router>
    )
  }
}

export default MyRouter