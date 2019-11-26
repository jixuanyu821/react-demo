import React from 'react'
import { Affix, Button } from 'antd';
class Index extends React.Component{
  render(){
    return(
      <div>
        <Affix type="primary">
          <Button>top</Button>
        </Affix>
        <Affix offsetBottom={0}>
          <Button>bottom</Button>
        </Affix>
      </div>
    )
  }
}
export default Index