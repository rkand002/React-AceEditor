import React, { Component } from 'react';
import { CqlAntlr, CqlResult } from '../dist/src';
import Button from 'react-bootstrap/Button';

class ExecuteCqlButton extends Component {
  state = {
    result: '',
  };

  handleClick() {
    const result = new CqlAntlr(this.props.editorValue).parse();
    console.log(result);
  }

  render() {
    return (
      <Button
        className="btn btn-success"
        size="md"
        onClick={() => this.handleClick()}
      >
        <strong>Run</strong>&nbsp;<span className="btn-icon">&#x25b6;</span>
      </Button>
    );
  }
}

export default ExecuteCqlButton;
