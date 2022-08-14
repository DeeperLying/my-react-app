import { useEffect, useState } from 'react'

import { Menu } from 'antd'

interface menuType {
  label: string
  key: string
}

const BlogMenu = () => {
  const [menuItem, setMenuItem] = useState(Array<menuType>)

  useEffect(() => {
    setMenuItem([
      { label: '首页', key: 'blogHome' },
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
