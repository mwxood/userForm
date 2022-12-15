import './App.css';
import Inputs from './Components/Inputs';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Inputs />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
