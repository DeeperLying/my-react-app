import React, { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'antd'

interface menuType {
  label: string | ReactNode
  key: string
}

const BlogMenu = () => {
  const [menuItem, setMenuItem] = useState(Array<menuType>)

  useEffect(() => {
    setMenuItem([
      { label: <Link href="/blog">首页</Link>, key: 'blogHome' },
      { label: '个人信息', key: 'blogInfo' }
    ])
  }, [])

  return (
    <Menu
      items={menuItem}
      mode="horizontal"
      defaultSelectedKeys={['blogHome']}
    />
  )
}

export default BlogMenu
