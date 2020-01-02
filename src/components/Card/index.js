import { Card, Icon, Avatar } from 'antd';
import React, { Component } from 'react'
import Replie from '../Replie'
const { Meta } = Card;
export default class CardContainer extends Component {
    state = {
        isShowReplie:false
    }
    render() {
        return (
            <div style={{ width: 300,marginRight:100 }}>
              <Card
    
    cover={
      <img
        alt="example"
        src={this.props.imgUrl}
      />
    }
    actions={[
      <Icon type="setting" key="setting" onClick={()=>{
          alert('test')
      }} />,
      <Icon type="edit" key="edit" onClick={()=>{
          this.setState({
              isShowReplie:true
          })
      }}/>,
      <Icon type="ellipsis" key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={this.props.title}
      description={this.props.description}
    />
  
  </Card>
  {this.state.isShowReplie &&  <Replie/>}
            </div>
        )
    }
}

