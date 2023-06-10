/*
 * @Author: Lee
 * @Date: 2022-10-05 22:44:08
 * @LastEditTime: 2023-06-10 14:26:52
 * @LastEditors: Lee
 */
import { NextPage } from 'next'
import { Button, Form, Input, message } from 'antd'
import Cookies from 'js-cookie'

import BlogMenu from 'components/blogMenu'

// api
import { login } from 'service/blog/user/user'

import styles from './index.module.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const Login: NextPage = () => {
  const [registerForm] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
    login(values).then((response) => {
      console.log(response)
      if (response.code == 200) {
        message.success('登录成功')
        Cookies.set('token', response.token)
      }
    })
  }

  return (
    <div>
      <BlogMenu />
      <div className={styles.register}>
        <Form
          {...layout}
          form={registerForm}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="UserName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="PassWord"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.register_emailWrapper_submit}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
