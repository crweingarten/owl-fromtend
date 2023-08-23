import "bootstrap/dist/css/bootstrap.min.css";
import "./OwlFrontEnd.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MoneyItemBox from "./components/MoneyItemBox";

function App() {
  return (
    <div className="owl-frontend">
      <Container>
        <Row>
          <Col xs={4}>
            <MoneyItemBox type="income" />
          </Col>
          <Col xs={4}>
            <MoneyItemBox type="expense" />
          </Col>
          <Col xs={4}>
            <MoneyItemBox type="savings" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
