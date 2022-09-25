import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import moment from 'moment'

import {
  Button,
  Form,
  Input,
  Modal,
  message as Message,
  DatePicker
} from 'antd'
import { EditorState } from 'braft-editor'

import {
  saveArticleList,
  saveArticle
} from '../../../service/blog/editor/index'

import styles from './editor.module.less'
import { useRouter } from 'next/router'

const { TextArea } = Input
const Editor = ({ handleOnSubmitSaveContent }: EditorState) => {
  // 在next.js中直接调用Editor会报window undefined
  const Editor = dynamic(() => import('../../../components/Editor/index'), {
    ssr: false
  })
  return <Editor handleOnSubmitSaveContent={handleOnSubmitSaveContent} />
}

const EditorPage: NextPage = () => {
  const router = useRouter()
  const refEditor = useRef(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [formLogogram] = Form.useForm()

  // useEffect(() => {
  //   setIsModalVisible(true)
  // }, [])

  const handleOnSubmitSaveContent = (text: EditorState): void => {
    refEditor.current = text.toHTML()
    console.log(text.toHTML())
  }

  const onFinish = (values: any) => {
    values.text = refEditor.current
    values.date = moment(values.date).format('YYYY-MM-DD HH:MM:SS')
    saveArticle(values).then((resolve) => {
      if (resolve?.code === 200) {
        Message.success('文章创建成功, 快去首页看看吧～')
        router.push('/blog')
      }
    })
  }

  const handleOk = () => {
    const data = formLogogram.getFieldsValue(true)
    saveArticleList(data).then((resolve) => {
      if (resolve?.code === 200) {
        Message.success('文章简介创建成功')
      }
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.editor}>
      <Form
        name="basic"
        wrapperCol={{ span: 10 }}
        onFinish={onFinish}
        autoComplete="off"
        className={styles.editor_from}
        form={form}
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: 'Please input your 标题!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="时间"
          name="date"
          rules={[{ required: true, message: 'Please input your 时间!' }]}
        >
          <DatePicker format="YYYY-MM-DD HH:MM:SS" />
        </Form.Item>

        <Form.Item
          label="作者"
          name="author"
          rules={[{ required: true, message: 'Please input your 作者!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="简介"
          name="introduction"
          rules={[{ required: true, message: 'Please input your 作者!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Editor handleOnSubmitSaveContent={handleOnSubmitSaveContent} />

        <Form.Item wrapperCol={{ span: 16 }} className={styles.editor_submit}>
          <Button type="primary" htmlType="submit">
            发布文章
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Basic Modal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="logogram"
          wrapperCol={{ span: 10 }}
          onFinish={onFinish}
          autoComplete="off"
          className={styles.editor_from}
          form={formLogogram}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: 'Please input your 标题!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="时间"
            name="date"
            rules={[{ required: true, message: 'Please input your 时间!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="作者"
            name="author"
            rules={[{ required: true, message: 'Please input your 作者!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="简介"
            name="text"
            rules={[{ required: true, message: 'Please input your 作者!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default EditorPage
