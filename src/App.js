import "bootstrap/dist/css/bootstrap.min.css";
import "./owlfrontend.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditSuite from "./components/EditSuite";
import MoneyColumnBox from "./components/MoneyColumnBox";

function App() {
  const data = require("./components/testdata.json");

  let income = [];
  let expense = [];
  let savings = [];

  data.money_items.forEach((item) => {
    if (item.type === "income") {
      income.push(item);
    } else if (item.type === "expense") {
      expense.push(item);
    } else if (item.type === "saving") {
      savings.push(item);
    }
  });

  return (
    <div className="owl-frontend">
      <Container>
        <Row>
          <EditSuite />
        </Row>
        <Row>
          <Col xs={4}>
            <MoneyColumnBox type="income" data={income} />
          </Col>
          <Col xs={4}>
            <MoneyColumnBox type="expense" data={expense} />
          </Col>
          <Col xs={4}>
            <MoneyColumnBox type="savings" data={savings} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
