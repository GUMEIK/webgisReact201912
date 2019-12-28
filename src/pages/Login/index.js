import React, { Component } from 'react'
import {Input} from 'antd'
import './index.css'
export default class Login extends Component {
    render() {
        return (
            <div className="LoginWrapper">
                <div className="loginArea">
                    <label>账号：<Input placeholder="请输入账号"/></label>
                    <label>密码：<Input.Password placeholder="请输入密码"/></label>
                </div>
            </div>
        )
    }
}
