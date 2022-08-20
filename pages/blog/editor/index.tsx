import { EditorState } from 'braft-editor'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

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

  return (
    <>
      <Editor handleOnSubmitSaveContent={handleOnSubmitSaveContent} />
    </>
  )
}

export default EditorPage
