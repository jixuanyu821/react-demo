import React from 'react'
import https from './https/https'
// import axios from 'axios'
// import './https/httpServe'

class AxiosDemo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataList:[],
    }
  }
  
  componentDidMount() {
    console.log('axios start')
    https.get('/edge/queryList').then((res)=>{
      console.log(res)
      this.setState({
        dataList:res.data
      })
    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.dataList.map((c)=>{
            return(
              <li key={c.id.toString()}  data-value={c.id}>{c.edgeName}</li>
            )
          }
          )}
        </ul>
      </div>
    )
  }
}
export default AxiosDemo