import dynamic from 'next/dynamic'

export default () => {
  const Editor = dynamic(() => import('../../../components/Editor/index'), {
    ssr: false
  })
  return <Editor />
}
