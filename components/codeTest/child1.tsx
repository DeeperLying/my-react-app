import { time } from 'console'
import React from 'react'
interface PropType {
  articleList: Array<any> | null
}
const Child1 = ({ articleList }: PropType) => {
  console.log(articleList, '--')
  const i = { i: 1 }
  return (
    <>
      {articleList?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <div>作者 {item.author}</div>
            <div>时间 {item.date} </div>
            <div>{item.text}</div>
          </div>
        )
      })}
    </>
  )
}

export default React.memo(Child1)
