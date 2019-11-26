import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import TimeMachine from './index.jsx'
import ConditionRender from './ConditionalRender.jsx'
import MapList from './MapList'
import ComponentApi from './ComponentApi'
import AxiosDemo from './AxiosDemo'
import Index from './Component/index'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount(){
    //渲染前 类似vue created
    console.log('Component WILL MOUNT!')
  }
  componentDidMount(){
    //dom加载完 类似vue mounted
    console.log('Component DID MOUNT!')
    // this.serverRequest = $.get(this.props.source,function(result){
      // var lastGIst = result[0]
    // })

  }
  componentWillReceiveProps(newProps){
    //组件接收到新的prop后调用  不会调用render
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState){
    //返回布尔值
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    //组件接收新的props 或者state但还没有render时调用 初始化的时候不会调用
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState){
    //组件更新完调用
    console.log('Component DID UPDATE!')
  }
  componentWillMount(){
    //组件被从dom中移除时调用
    console.log('Component WILL UNMOUNT!')
  }
  handleClick(){
    this.setState(function(state) {
      return{
        count:state.count+1
      }
    })
  }
  render(){  
    return (
      <div className="App">
        <header className="App-header">
          {/* 组件API */}
          <ComponentApi/>
          <button onClick={this.handleClick}>123</button>
          {this.state.count}
          {/* 基础用法 */}
          <TimeMachine/>
          {/* axiosdemo */}
          <AxiosDemo/>
          {/* 列表渲染  for/map */}
          <Index/>
          <MapList/>
          {/* 条件渲染 */}
          <ConditionRender/>
        </header>
      </div>
    );
  }
}

export default App;
