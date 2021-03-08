import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom'
class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="App">
        <h1 className="header">个人信息</h1>

        {/* <Link to="/path">path</Link>
        {this.props.children} */}
      </div>
    );
  }
}

export default App
