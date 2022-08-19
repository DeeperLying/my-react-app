// components/Editor.jsx

import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class Editor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  render() {
    return (
      <BraftEditor
        value={this.state.editorState}
        onChange={this.handleChange}
      />
    )
  }

  handleChange = (editorState: any) => {
    console.log(editorState.toHTML())
    this.setState({ editorState })
  }
}
