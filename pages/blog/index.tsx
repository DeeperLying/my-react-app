import { NextPage } from 'next'
import { useState } from 'react'

import BlogMenu from '../../components/blogMenu'
import Child1 from '../../components/codeTest/child1'
import Child2 from '../../components/codeTest/child2'

const BlogHome: NextPage = () => {
  const [user, setUser] = useState(1)
  return (
    <div>
      <BlogMenu />
      <div
        onClick={() => {
          setUser(1)
        }}
      >
        {user}
      </div>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default BlogHome
