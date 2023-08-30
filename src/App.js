import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./owlfrontend.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditSuite from "./components/EditSuite";
import MoneyColumnBox from "./components/MoneyColumnBox";

function App() {
  const { money_items } = require("./components/testdata.json");

  let income = [];
  let expense = [];
  let savings = [];

  money_items.forEach((item) => {
    if (item.type === "income") {
      income.push(item);
    } else if (item.type === "expense") {
      expense.push(item);
    } else if (item.type === "saving") {
      savings.push(item);
    }
  });

  const [incomeItems, setIncome] = useState(income);
  const [editItem, setEditItem] = useState();
  const [isSavings, setSavings] = useState(false);

  function handleUpdate(item, editStatus) {
    // console.log("IN:", item.rate);
    const formattedItem = {
      name: item.name,
      amount: item.amount,
      type: item.type,
      rate: item.rate,
      duration: {
        From: item.datefrom,
        To: item.dateto,
      },
      withdraw: item.withdraw,
      interest_rate: item.interest_rate,
      from: item.from,
      compound: item.compound,
    };

    // console.log("OUT:", formattedItem.rate);

    editStatus === "new"
      ? setIncome([...incomeItems, formattedItem])
      : setEditItem(item);
  }

  function handleSavings(e) {
    e === "saving" ? setSavings(true) : setSavings(false);
  }

  return (
    <div className="owl-frontend">
      <Container>
        <Row>
          <EditSuite
            handleUpdate={handleUpdate}
            handleSavings={handleSavings}
            isSavings={isSavings}
            editItem={editItem}
          />
        </Row>
        <Row>
          <Col xs={4}>
            <MoneyColumnBox
              type="income"
              data={incomeItems}
              handleUpdate={handleUpdate}
            />
          </Col>
          <Col xs={4}>
            <MoneyColumnBox
              type="expense"
              data={expense}
              handleUpdate={handleUpdate}
            />
          </Col>
          <Col xs={4}>
            <MoneyColumnBox
              type="savings"
              data={savings}
              handleUpdate={handleUpdate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
