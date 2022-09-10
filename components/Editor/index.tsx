import 'braft-editor/dist/index.css'
import React, { useState } from 'react'
import BraftEditor, { EditorState } from 'braft-editor'

interface PropsTypes {
  handleOnSubmitSaveContent(text: EditorState): void
}

let text: any
const Editor = ({ handleOnSubmitSaveContent }: PropsTypes) => {
  const [editorState] = useState(BraftEditor.createEditorState(null))

  const handleChange = (editorState: any) => {
    text = editorState
  }

  const submitContent = () => {
    handleOnSubmitSaveContent(text)
  }

  const myUploadFn = (params: any) => {
    console.log(params)
  }

  return (
    <BraftEditor
      value={editorState}
      onChange={handleChange}
      onSave={submitContent}
      media={{ uploadFn: myUploadFn }}
    />
  )
}

export default Editor
