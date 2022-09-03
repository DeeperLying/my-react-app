import { NextPage } from 'next'
import { useEffect, useState } from 'react'

import BlogMenu from '../../components/blogMenu'
import Child1 from 'components/codeTest/child1'
import Child2 from 'components/codeTest/child2'

import { getArticleList } from '/service/blog/article/index.js'

interface GetArticleListType {
  code: number
  errorMsg: null | string
  data: null | Array<object>
}

const BlogHome: NextPage = () => {
  // const [articleList, setArticleList] = useState<null | Array<object>>(null)
  // console.log('duosc')
  // useEffect(() => {
  //   getArticleList({
  //     pageSize: 20,
  //     currentPage: 0
  //   }).then(({ code, data }: GetArticleListType) => {
  //     // console.log(resolve, 'resolve')
  //     if (code === 200) {
  //       setArticleList(data)
  //     }
  //   })
  // }, [])
  return (
    <div>
      <BlogMenu />
      <div>1</div>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default BlogHome
