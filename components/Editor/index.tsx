import 'braft-editor/dist/index.css'
import React, { useRef, useState } from 'react'
import BraftEditor, { EditorState } from 'braft-editor'

interface PropsTypes {
  handleOnSubmitSaveContent(text: EditorState): void
}

const Editor = ({ handleOnSubmitSaveContent }: PropsTypes) => {
  // 用ref来缓冲数据会报错
  const [editorState] = useState(BraftEditor.createEditorState(null))
  const text: EditorState = useRef(null)

  const handleChange = (editorState: any) => {
    console.log(editorState.toHTML())
    text.current = editorState
  }

  const submitContent = () => {
    handleOnSubmitSaveContent(text.current)
  }
  return (
    <BraftEditor
      value={editorState}
      onChange={handleChange}
      onSave={submitContent}
    />
  )
}

export default Editor
