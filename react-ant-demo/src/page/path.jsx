import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
class Path extends React.Component{
  constructor(props){
    super(props)
  }
  handleClick(e){
    this.props.history.push({pathname:'/about',search:'?some=state'})
  }
  render() {
    return (
      <div>
        path页
        <Link to="/">返回首页</Link>
        <Button onClick={ (e)=>this.handleClick(e) }>about</Button>
        {this.props.children}
      </div>
    );
  }
}
export default Path