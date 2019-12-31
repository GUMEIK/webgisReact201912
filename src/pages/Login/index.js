import 'antd/dist/antd.css';
import './index.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        // 此处发送请求
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props)
        fetch('http://localhost:12306/').then(res=>res.text()).then(res =>{
          if(res === 'ok'){
            console.log(res)
            this.props.history.push('/table')
          }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="LoginWrapper">
            <div className="loginArea"  style={{backgroundColor:'#fff'}}>
              {this.props.isMange && <span style={{fontStyle:'bold',backgroundColor:'#40a9ff',color:'#fff',padding:5}}>管理员登录</span>}
              {this.props.isMange && <span style={{fontStyle:'bold',float:'right',backgroundColor:'#40a9ff',color:'#fff',padding:5}}>取消登录</span>}
            <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical" style={{paddingTop:35}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        
       
        <Form.Item>
        <p style={{display:'flex',justifyContent:'space-around'}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
         {/* 跳转 */}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          </p>
         <p style={{display:'flex',justifyContent:'center'}}>
         <Button type="primary" htmlType="submit" className="login-form-button" style={{width:200}}>
           登录
          </Button>
          
         
         </p>
         {!this.props.isMange && 
         <p style={{display:'flex',justifyContent:'center'}}>
          <Button type="primary" style={{width:200}}>
           <Link to="/rejister">注册</Link>
           </Button>
          </p>}
        </Form.Item>
      </Form>
            </div>
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);