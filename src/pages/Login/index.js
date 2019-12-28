import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import React from 'react'
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        // 此处发送请求
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="LoginWrapper">
            <div className="loginArea">
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
         <p style={{display:'flex',justifyContent:'center'}}>
          <Button type="primary" htmlType="submit"style={{width:200}}>
           注册         </Button>
          </p>
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