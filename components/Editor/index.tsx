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
  return (
    <BraftEditor
      value={editorState}
      onChange={handleChange}
      onSave={submitContent}
    />
  )
}

export default Editor
