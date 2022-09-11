import 'braft-editor/dist/index.css'
import React, { useState } from 'react'
import BraftEditor, { EditorState } from 'braft-editor'

// api
import { upLoad } from 'service/blog/common'

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
    const fromdata = new FormData()
    fromdata.append('file', params.file)
    upLoad(fromdata).then(({ data }: any) => {
      params.success({
        url: 'http://localhost:8443' + data.url
      })
    })
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
