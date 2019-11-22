import React from 'react';
function FormatterData1 (props) {
  return <h2>时间{props.date.toLocaleTimeString()}</h2>
}
class FormatterData extends React.Component {
  render () {
    return (
      <div>
        <h2>时间{this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
class MessageBox extends React.Component {
  render () {
    return (
      <h1>messageBox!{this.props.msg}</h1>
    )
  }
}
class TimeMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(props);
    this.alertFun = this.alertFun.bind(this);
  }
  componentDidMount () {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
  }
  tick () {
    this.setState({
      date: new Date()
    })
  }
  alertFun (e) {
    e.preventDefault()//阻止默认事件
    console.log(e)
    console.log(e.target)//当前点击元素
    console.log(this)
  }
  render () {
    return (
      <div>
        <MessageBox msg="world" />
        <FormatterData1 date={this.state.date} msg="world" />
        <FormatterData date={this.state.date} msg="world" />
        <a href="www.baidu.com" onClick={(e) => this.alertFun(e)}>123</a>
        <MessageBox1 />
      </div>
    );
  }
}
class MessageBox1 extends React.Component {
  alertFun (e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    console.log(this)
  }
  render () {
    return (
      <a onClick={function (e) { console.log(e, 'this') }} >234</a>
    )
  }
}
// function alertFun(data,e){
//   console.log(e)
//   // e.preventDefault();
//     console.log(this)
//     alert(data)
// }
export default TimeMachine