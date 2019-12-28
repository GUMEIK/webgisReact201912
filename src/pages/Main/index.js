import React from 'react'
import 'antd/dist/antd.css';
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
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
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>图层</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#ddd', padding: 0,height:20,margin:0}}>
          </Header>
          {/* 右侧内容区域 */}
          <Content style={{ margin: '0' }} children={<h1>测试</h1>}>
            <div 
            // 作为arcGIS图层显示的容器
            id="acrgisContainer"
            style={{width:'100%',height:'100%'}}></div>
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
          {/* <Footer style={{ textAlign: 'center' ,height:20}}>
            徐振鲁 司玄玄 吴春阳 王  哲  王  香
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);