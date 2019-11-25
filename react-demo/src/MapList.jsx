import React from 'react'

class NumberList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      numbers:props.numbers
    }
  }
  render(){
    const numbers = this.state.numbers
    return(
    <ul>
      {numbers.map((c)=>
        <li key={c.toString()} > 序号{c}</li>
      )}
    </ul>
    )
  }
}

class MapList extends React.Component{
  render(){
    const numbers = [1,2,3,4,5]
    // const listItems = numbers.map((a)=> <li>{a}</li>)
    return(
      <div>
        <p>列表渲染</p>
        {/* {listItems} */}
        <NumberList numbers={numbers}/>
      </div>
    )
  }
}
export default MapList