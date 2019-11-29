import React from 'react'
class About extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.location)
  }
  render(){
    return(
      <div>
        about
      </div>
    )
  }
}
export default About