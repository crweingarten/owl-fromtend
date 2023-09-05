import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./owlfrontend.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditSuite from "./components/EditSuite";
import MoneyColumnBox from "./components/MoneyColumnBox";
import IncomeDropdown from "./components/IncomeDropdown";
import Header from "./components/Header";
import Span from "./components/Span";
import Graph from "./components/Graph";

// APP.JS IS THE MAIN HUB FOR EVERYTHING

function App() {
  // THE DATA COMES THROUGH AS "money_items" SO MAKE YOUR INITIAL API CALL TO GET EXISTING DATA HERE.
  // AS YOU CAN SEE, ITS CURRENTLY PULLING FAKE DATA FROM testdata.json
  const { money_items } = require("./components/testdata.json");
  const [items, setItem] = useState(money_items);
  const [editItem, setEditItem] = useState();
  const [deleteItem, setDeleteItem] = useState();
  const [isSavings, setSavings] = useState(false);

  let income = [];
  let expense = [];
  let savings = [];

  // THIS SORTS THE RAW, INCOMING DATA INTO THE INCOME, EXPENSE AND SAVINGS ARRAYS ABOVE

  items.forEach((item) => {
    if (item.type === "income") {
      income.push(item);
    } else if (item.type === "expense") {
      expense.push(item);
    } else if (item.type === "saving") {
      savings.push(item);
    }
  });

  // THIS FORMATS THE INCOME ITEMS FOR WHEN YOU WANT TO CHOOSE THEM IN SAVINGS
  const incomeDropdown = IncomeDropdown(income);

  // WHEN YOU ADD A NEW ITEM IT GOES THROUGH THIS FUNCTION SO IT
  // CAN MAKE THE APPROPRIATE CHANGES ON WHAT THE USER SEES
  function handleUpdate(item) {
    handleSavings(item.type);
    const formattedItem = {
      name: item.name,
      id: item.id ? item.id : `${item.type}-${items.length + 1}`,
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

    const editedItems = items.map((storedItem) => {
      if (storedItem.id === formattedItem.id) {
        return formattedItem;
      } else {
        return storedItem;
      }
    });

    !item.id ? setItem([...items, formattedItem]) : setItem(editedItems);
    setEditItem("");
  }

  // THIS IS FOR EDITING, DUPLICATING & DELETING EXISTING CONTENT. AGAIN, THIS
  // JUST UPDATES WHAT THE USER SEES
  function handleEdit(item, editType) {
    if (editType === "edit") {
      setEditItem(item);
      console.log(item.duration.From);
    }
    if (editType === "duplicate") {
      setEditItem({
        ...item,
        name: `${item.name}-copy`,
        id: "",
        dupeof: item.id,
      });
    }
    if (editType === "delete") {
      setDeleteItem(item);
    }
    if (
      item === editItem ||
      (editItem?.dupeof && item.id === editItem.dupeof)
    ) {
      setEditItem("");
    }
    if (item.type === "saving" && !editItem) {
      setSavings(true);
    } else {
      setSavings(false);
    }
  }

  // THIS DECIDES WHAT THE USER SEES WHEN YOU CLICK "YES" OR "NO" ON
  // DELETE POPUP
  function handleDelete(item, type) {
    if (type === "cancel") {
      setDeleteItem("");
      setEditItem("");
      setSavings(false);
    }
    if (type === "delete") {
      const itemsMinusOne = items.filter((data) => data.id !== item.id);
      setItem(itemsMinusOne);
      setEditItem("");
    }
  }

  // SHOW OR DON'T SHOW THE EXTRA FIELDS FOR SAVINGS
  function handleSavings(e) {
    e === "saving" ? setSavings(true) : setSavings(false);
  }

  return (
    <div>
      {/* "HEADER" IS THE SIMPLE HEADER/LOGO COMPONENT */}
      <Header />
      <div className="owl-frontend">
        <Container>
          <Row>
            {/* "SPAN" IS THE TO-FROM FORM ON THE TOP OF THE PAGE */}
            <Span />
          </Row>
          <Row>
            {/* EDIT SUITE IS THE MAIN FORM FOR EDITING */}
            <EditSuite
              handleUpdate={handleUpdate}
              handleSavings={handleSavings}
              isSavings={isSavings}
              editItem={editItem}
              incomeDropdown={incomeDropdown}
            />
          </Row>
          <Row>
            <Col xs={4}>
              {/* THE INCOME COLUMN */}
              <MoneyColumnBox
                type="income"
                data={income}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isEdit={editItem}
                isDelete={deleteItem}
              />
            </Col>
            <Col xs={4}>
              {/* THE EXPENSE COLUMN */}
              <MoneyColumnBox
                type="expense"
                data={expense}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isEdit={editItem}
                isDelete={deleteItem}
              />
            </Col>
            <Col xs={4}>
              {/* THE SAVINGS COLUMN */}
              <MoneyColumnBox
                type="savings"
                data={savings}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isEdit={editItem}
                isDelete={deleteItem}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="owl-frontend">
        <Container>
          {/* THE SPACE FOR THE GRAPH IS BELOW */}
          <Graph />
        </Container>
      </div>
    </div>
  );
}

export default App;
