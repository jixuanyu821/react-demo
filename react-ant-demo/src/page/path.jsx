import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import https from '../https/https.js'

class Path extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:0,
      dataList:[],
      name:'',
      url:'',
      alexa:0,
      country:''
    }
  }
  handleClick(e){
    this.props.history.push({pathname:'/about',search:'?some=state'})
  }
  upDateTable(){
    https.get('/get').then((res)=>{
      console.log(res)
      this.setState({
        dataList:res
      })
    })
  }
  submitTable(){
    var param = {
      name:this.state.name,
      url:this.state.url,
      alexa:this.state.alexa,
      country:this.state.country,
    }
    https.postRequestBody('/addTable',param).then((res)=>{
      console.log(res);
    });
  }
  componentDidMount(){
    this.upDateTable();
  }
  render() {
    return (
      <div>
        path页
        <Link to="/">返回首页</Link>
        <br/>
        <Button onClick={ (e)=>this.handleClick(e) }>about</Button>
        <br/>
        <p>{this.state.value}</p>
        {this.props.children}
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>名称</td>
              <td>路径</td>
              <td>排名</td>
              <td>国家</td>
            </tr>
          </thead>
          <tbody>
            {this.state.dataList.map((data)=>{
              return (<tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.url}</td>
                <td>{data.alexa}</td>
                <td>{data.country=='CN'?'中国':'美国'}</td>
                
              </tr>)
            })}
          </tbody>
        </table>
        <div>
          <label>名称</label><input type="text" value={this.state.name}  onChange={ (e)=> this.setState({
            name:e.target.value
          })}/>
        </div>
        <div>
          <label>路径</label><input type="text" value={this.state.url}  onChange={ (e)=> this.setState({
            url:e.target.value
          })}/>
        </div>
        <div>
          <label>排名</label><input type="text" value={this.state.alexa}  onChange={ (e)=> this.setState({
            alexa:e.target.value
          })}/>
        </div>
        <div>
          <label>国家</label><input type="text" value={this.state.country}  onChange={ (e)=> this.setState({
            country:e.target.value
          })}/>
        </div>
        <Button onClick={ (e)=>this.submitTable(e) }>新增</Button>
      </div>
    );
  }
}
export default Path