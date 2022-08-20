import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { EditorState } from 'braft-editor'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styles from './editor.module.less'
const Editor = ({ handleOnSubmitSaveContent }: EditorState) => {
  // 在next.js中直接调用Editor会报window undefined
  const Editor = dynamic(() => import('../../../components/Editor/index'), {
    ssr: false
  })
  return <Editor handleOnSubmitSaveContent={handleOnSubmitSaveContent} />
}

const EditorPage: NextPage = () => {
  const handleOnSubmitSaveContent = (text: EditorState): void => {
    console.log('save text', text)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <div className={styles.editor}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="标题："
          name=" title"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="时间"
          name="date"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Editor handleOnSubmitSaveContent={handleOnSubmitSaveContent} />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            发布文章
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditorPage
