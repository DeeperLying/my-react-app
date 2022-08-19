import React from 'react'

const Child2 = () => {
  console.log('child2 执行一次')
  return <div>child2</div>
}

export default React.memo(Child2)
