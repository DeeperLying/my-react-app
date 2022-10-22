import { NextPage } from 'next'
import { Button, Form, Input, message } from 'antd'

import BlogMenu from 'components/blogMenu'

// api
import { sendEmail, register } from 'service/blog/user/user'

import styles from './index.module.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const Register: NextPage = () => {
  const [registerForm] = Form.useForm()

  const onFinish = (values: any) => {
    register(values).then(({ code }) => {
      if (code == 200) {
        message.success('注册成功')
      }
    })
  }

  const handleSendEmail = () => {
    const email = registerForm.getFieldValue('email')

    if (email) {
      sendEmail({ email }).then((data) => {
        console.log(data)
        if (data.code) {
          message.success('邮件已发送')
        }
      })
    }
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
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <div className={styles.register_emailWrapper}>
              <Input />
              <Button
                type="primary"
                className={styles.register_emailWrapper_btn}
                onClick={handleSendEmail}
              >
                发送邮件
              </Button>
            </div>
          </Form.Item>
          <Form.Item
            name="code"
            label="code"
            rules={[{ required: true, len: 6 }]}
          >
            <Input type="number" maxLength={6} minLength={6} />
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

export default Register
