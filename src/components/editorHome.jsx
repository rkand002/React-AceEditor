import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

class EditorHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AceEditor
          value={this.props.editorValue}
          mode=""
          theme="github"
          onChange={(e) => this.props.handleEditorChange(e)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          tabSize={this.props.tabSize}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          width="1298"
          annotations={[
            {
              row: 1,
              column: 0,
              text: 'Error Message',
              type: 'error',
            },
            {
              row: 9,
              column: 0,
              text: 'Error Message',
              type: 'error',
            },
          ]}
        ></AceEditor>
      </React.Fragment>
    );
  }
}

export default EditorHome;
