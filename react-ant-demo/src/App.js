import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div>
        app页
        <Link to="/path">path</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App
