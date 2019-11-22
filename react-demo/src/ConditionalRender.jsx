import React from 'react';
function UserGreeting(props){
  return <h1>欢迎回来</h1>
}
function GuestGreeting(props){
  return <h1>请先注册</h1>
}
function LoginInButton(props){
  return (<button onClick={props.onClick}>登陆</button>)
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      退出
    </button>
  );
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}
class ConditionRender extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false
    }
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true})
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false})
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn){
      button = <LogoutButton onClick={(e)=> this.handleLogoutClick(e)}/>
    }else{
      button = <LoginInButton onClick={(e)=>this.handleLoginClick(e)}/>
    }
    return(
      <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
      </div>
    )
  }
}
export default ConditionRender