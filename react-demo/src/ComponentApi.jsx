import React from 'react'
class CompontentApi extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clickConunt:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(function(state){
      return { clickConunt:state.clickConunt+1}
    })
  }
  render(){
    return(
      <div>
        <h4 onClick={this.handleClick}>点击计数+1!{this.state.clickConunt}</h4>
      </div>
    )
  }
}
export default CompontentApi