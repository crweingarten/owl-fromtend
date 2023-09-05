import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faClone, faTrash } from "@fortawesome/free-solid-svg-icons";
import DurationsFormatter from "./DurationsFormatter";

export default function MoneyItem({
  item,
  handleEdit,
  isEdit,
  handleDelete,
  isDelete,
}) {
  function dateFormatter(date) {
    if (!date) {
      return "";
    }
    if (date === "2999-01-01") {
      return "Indefinite";
    } else {
      var formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "UTC",
      });
      return formattedDate;
    }
  }

  const [isInactive, setInactive] = useState(false);
  const boxColor = isEdit && item.id === isEdit.id ? "money-item" : "";
  const deleteWarning = isDelete && item.id === isDelete.id;
  const inactive = isInactive ? "inactive" : "";

  return (
    <>
      {!deleteWarning ? (
        <div className={inactive}>
          <Container className={boxColor}>
            <Row>
              <Col xs={3} className="toolbox">
                <input
                  type="checkbox"
                  className="item-checkbox"
                  id={item.name}
                  onChange={() => {
                    setInactive(!isInactive);
                  }}
                />{" "}
                <span onClick={() => handleEdit(item, "edit")}>
                  <FontAwesomeIcon icon={faPencil} />
                </span>{" "}
                <span onClick={() => handleEdit(item, "duplicate")}>
                  <FontAwesomeIcon icon={faClone} />
                </span>{" "}
                <span onClick={() => handleEdit(item, "delete")}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </Col>
              <Col xs={3} className="money-item-title">
                {item.name}
              </Col>
              <Col xs={6} className="money-item-amount">
                ${item.amount}
              </Col>
            </Row>
            {item.type === "saving" ? (
              <>
                <Row className="money-item-info">
                  <Col xs={6} />
                  <Col xs={6}>
                    {item.withdraw}% from {item.from}
                  </Col>
                </Row>
              </>
            ) : null}
            <Row className="money-item-info">
              <Col xs={6} />
              {item.type === "saving" ? (
                <Col xs={6}>{DurationsFormatter(item.compound)}</Col>
              ) : (
                <Col xs={6}>{DurationsFormatter(item.rate)}</Col>
              )}
            </Row>
            <Row className="mb-4 money-item-info">
              <Col xs={6} />
              <Col xs={6}>
                {dateFormatter(item.duration.From)} -{" "}
                {dateFormatter(item.duration.To)}
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Container className="delete-warning">
          <Col xs={12} className="my-3">
            <div className="delete-warning">
              Are you sure you want to delete{" "}
            </div>
            <div>
              <span className="money-item-title">{item.name}?</span>
            </div>
            <div>
              <button onClick={() => handleDelete(item, "delete")}>Yes</button>
              <button onClick={() => handleDelete(item, "cancel")}>No</button>
            </div>
          </Col>
        </Container>
      )}
    </>
  );
}
