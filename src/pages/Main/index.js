import React from 'react'
import 'antd/dist/antd.css';
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Login from '../Login'
import Test from '../../components/Test'
import Chat from '../Chat'
import Card from '../../components/Card'
import Table from '../../components/Table'
import Frame from '../Frame'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    isShowCard:false,
    isShowFrame:false,
    isShowChat:false,
    isShowHeatMap:false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={()=>{
              this.setState({
                isShowHeatMap:!this.state.isShowHeatMap
              })
            }}>
              <Icon type="pie-chart" />
              <span>热力图</span>
            </Menu.Item>
           
            <SubMenu
            onClick={()=>{
              this.setState({
                isShowChat:true
              })
            }}
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>景点交流</span>
                </span>
              }
            >
              <Menu.Item key="3">小王</Menu.Item>
              <Menu.Item key="4">老李</Menu.Item>
              <Menu.Item key="5">大哥</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>群聊广播</span>
                </span>
              }
            >
              <Menu.Item key="6">青天河旅游出行群</Menu.Item>
              <Menu.Item key="8">云台山旅游攻略</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" onClick={()=>{
              this.setState({
                isShowCard:!this.state.isShowCard
              })
            }}>
              <Icon type="edit" />
              <span>景点评论</span>
            </Menu.Item>
            <Menu.Item key="10" onClick={()=>{
              this.setState({
                isShowFrame:!this.state.isShowFrame
              })
            }}>
              <Icon type="coffee" />
              <span>吃穿住行</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={
              ()=>{
                alert('tse')
                this.props.history.push('/Table')
              }
            }>
              <Icon type="desktop" />
              <span>后台管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          
          <Header style={{ background: '#ddd', padding: 0,height:this.state.isShowFrame ? 0 : 50,margin:0}}>
            {/* 头部导航栏 */}
            {/* 暂时不需要 */}
            {!this.state.isShowFrame && <Test/>}
          </Header>
          {/* 右侧内容区域 */}
          <Content style={{ margin: '0',overflow:'hidden'}}>
              {/* <Chat/> */}
              {/* 吃穿住行 */}
              {this.state.isShowFrame && <Frame frameUrl="http://localhost:3005/jiaozuo"/>}
              {/* 聊天 */}
              {this.state.isShowChat && <Frame frameUrl="http://localhost:3001"/>}
              {/* 热力图显示 */}
              {this.state.isShowHeatMap && <Frame frameUrl="http://127.0.0.1:5500/src/HTML/hotpot.html" />}
            <div 
            // 作为arcGIS图层显示的容器
            id="acrgisContainer"
            style={{width:'100%',height:'100%'}}>

                {/* 管理员登录界面 */}
                {/* 登录成功跳转后台管理 */}
            {/* <Login isMange={true} /> */}
            {this.state.isShowCard && 
              <div>
              <Card imgUrl="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577942650074&di=6155f1b766b2fb0148631c687e7e8e0f&imgtype=0&src=http%3A%2F%2Fdimg04.c-ctrip.com%2Fimages%2Ffd%2Fvacations%2Fg3%2FM09%2F61%2F10%2FCggYGVX434qAMKWBABLbgo9FGFU855.jpg"
              description="哇哦，云台山耶耶耶"
              />
              {/* 青天河图片地址 */}
              <Card imgUrl=""
              description="青天呵呵呵呵"
              />
              </div>
            }
           

            </div>
            {/* 右侧菜单区域 */}
            <div className="rightMenu">
              <i className="iconfont iconsvgditutubiao-" onClick={()=>{
                  this.setState({
                      isShowFuncList:!this.state.isShowFuncList
                  })
              //    alert('ceshi')
              }}></i>
              <i className="iconfont iconditu"></i>
              <i className="iconfont iconjia"></i>
              <i className="iconfont icondelete"></i>
              <i className="iconfont iconlocation"></i>
              </div>
          </Content>
          {/* <Chat/> */}
           {/* <Footer style={{ textAlign: 'center'}}>
           
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);