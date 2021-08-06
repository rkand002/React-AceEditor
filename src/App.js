import React, { Component } from 'react';
import EditorHome from './components/editorHome';
import ExecuteCqlButton from './components/executeCqlButton';
import TabSize from './components/tabSize';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MadieLogo from './madie.png';

class App extends Component {
  state = {
    editorValue:
      'library TestMeasureRohit version \'0.0.000\'\n\nusing FHIR version \'4.0.1\'\n\ninclude SupplementalDataElementsFHIR4 version \'2.0.000\' called SDE\ninclude FHIRHelpers version \'4.0.001\' called FHIRHelpers\ninclude MATGlobalCommonFunctionsFHIR4 version \'5.0.000\' called Global\n\nparameter "Measurement Period" Interval<DateTime>\n\ncontext Patient\n\ndefine "SDE Ethnicity":\n  SDE."SDE Ethnicity"\n\ndefine "SDE Payer":\n  SDE."SDE Payer"\n\ndefine "SDE Race":\n  SDE."SDE Race"\n\ndefine "SDE Sex":\n  SDE."SDE Sex"\n',
    tabSize: 2,
  };

  handleEditorChange(newValue) {
    this.setState({
      editorValue: newValue,
    });
  }

  handleCqlExecuteButton(result) {
    console.log('Error ', result);
  }

  handleTabSizeChange(newValue) {
    this.setState({
      tabSize: newValue,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid className="p-0">
          <div className="header">
            <div className="logo-wrapper">
              <img
                src={MadieLogo}
                className="logo-img"
                alt="MADiE tool logo"
              ></img>
            </div>
          </div>
        </Container>
        <Container className="p-4">
          <Row>
            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                <div className="me-3">
                  <TabSize
                    tabSize={this.state.tabSize}
                    handleTabSizeChange={this.handleTabSizeChange.bind(this)}
                  />
                </div>
                <div className="ms-3">
                  <ExecuteCqlButton
                    handleCqlExecuteButton={this.handleCqlExecuteButton.bind(
                      this
                    )}
                    editorValue={this.state.editorValue}
                  />
                </div>
              </div>
            </div>
          </Row>
          <Row className="my-4">
            <Col className="p-0 editor-container">
              <EditorHome
                editorValue={this.state.editorValue}
                tabSize={this.state.tabSize}
                handleEditorChange={this.handleEditorChange.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
