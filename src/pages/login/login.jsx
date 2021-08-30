import React, { Component } from 'react'
import login from './login.less'
import { Form, Input, Button, Checkbox } from 'antd';
const Item = Form.Item
/*登录的路由组建*/
export default class Login extends Component {
    onFinish = ()=>{

    }
    onFinishFailed = ()=>{

    }
    render() { 
      return ( 
        <div className="login-content">
          <header>
            React：后台管理系统
          </header>
          <section className="login-form">
            <h2>用户登录</h2>
            <div>
              <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Item
                  label="用户名"
                  name="用户名"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Item>

                <Item
                  label="密码"
                  name="密码"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Item>
                <Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Button type="primary" htmlType="submit" className="login-button">
                    登录
                  </Button>
                </Item>
              </Form>
            </div>
          </section>
        </div>
        )
    }
}