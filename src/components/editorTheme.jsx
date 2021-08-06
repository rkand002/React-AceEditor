import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class EditorTheme extends Component {
  brightEditorThemeList = [
    'Chrome',
    'Chrome',
    'Crimson Editor',
    'Dawn',
    'Dreamweaver',
    'Eclipse',
    'GitHub',
    'IPlastic',
    'Solarized Light',
    'TextMate',
    'Tomorrow',
    'Xcode',
    'Kuroir',
    'KatzenMilch',
    'SQL Server',
    'monokai"',
  ];
  render() {
    return (
      <label>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="secondary">
            Theme:
            <span className="mx-1">
              <strong>{this.props.editorTheme}</strong>
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {this.brightEditorThemeList.map((editorTheme, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  onClick={() =>
                    this.props.handleEditorThemeChange(editorTheme)
                  }
                >
                  {editorTheme}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </label>
    );
  }
}

export default EditorTheme;
