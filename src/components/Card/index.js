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
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
      title="Card title"
      description="This is the description"
    />
   {this.state.isShowReplie &&  <Replie/>}
  </Card>
        )
    }
}

