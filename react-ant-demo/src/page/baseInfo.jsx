import React from 'react'
import './baseInfo.scss'
class BaseInfo extends React.Component{
  constructor() {
    super()
    this.state = {
      userName:  '',
      age: '',
      university: '',
      native: ''
    }
  }
  render(){
    return(
      <div className="data_content">
        <div>
          <label>姓名</label>
          <span>{this.state.userName}</span>
        </div>
        <div>
          <label>年龄</label>
          <span>{this.state.age}</span>
        </div>
        <div>
          <label>学校</label>
          <span>{this.state.university}</span>
        </div>
        <div>
          <label>籍贯</label>
          <span>{this.state.native}</span>
        </div>
      </div>
    )
  }

}
export default BaseInfo