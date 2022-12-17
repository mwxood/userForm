import './App.css';
import UserInformation from './Components/UserInformation';
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
            <UserInformation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
