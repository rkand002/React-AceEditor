import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/monokai';

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
          theme="monokai"
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
          markers={[
            {
              startRow: 4,
              endRow: 7,
              className: 'error-marker',
              type: 'text',
              inFront: true,
            },
          ]}
        ></AceEditor>
        {/* <span className="error-marker"></span> */}
      </React.Fragment>
    );
  }
}

export default EditorHome;
