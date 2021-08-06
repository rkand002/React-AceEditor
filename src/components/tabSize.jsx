import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class TabSize extends Component {
  tabSizeList = [2, 4, 6, 8];
  render() {
    return (
      <label>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="secondary">
            Tab size:
            <span className="mx-1">
              <strong>{this.props.tabSize}</strong>
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {this.tabSizeList.map((tabSize, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  onClick={() => this.props.handleTabSizeChange(tabSize)}
                >
                  {tabSize}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </label>
    );
  }
}

export default TabSize;
