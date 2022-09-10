import React from 'react'
import { useRouter } from 'next/router'
import { Card, Space } from 'antd'
interface PropType {
  articleList: Array<any> | null
}
const Child1 = ({ articleList }: PropType) => {
  const route = useRouter()
  const toAticleDetial = (id: number) => {
    route.push('blog/article/' + id)
  }
  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {articleList?.map((item) => {
          return (
            <Card
              title="Card"
              size="small"
              key={item.id}
              onClick={() => toAticleDetial(item.id)}
            >
              <div>
                <h2>{item.title}</h2>
                <div>作者 {item.author}</div>
                <div>时间 {item.date} </div>
                <div>{item.text}</div>
              </div>
            </Card>
          )
        })}
      </Space>
    </>
  )
}

export default React.memo(Child1)
