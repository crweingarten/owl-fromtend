import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faClone, faTrash } from "@fortawesome/free-solid-svg-icons";
import DurationsFormatter from "./DurationsFormatter";

export default function MoneyItem({ item, handleUpdate }) {
  console.log(item.type);
  return (
    <Container>
      <Row>
        <Col xs={3} className="toolbox">
          <input type="checkbox" className="item-checkbox" id={item.name} />{" "}
          <span onClick={() => handleUpdate(item)}>
            <FontAwesomeIcon icon={faPencil} />
          </span>{" "}
          <span onClick={() => handleUpdate(item)}>
            <FontAwesomeIcon icon={faClone} />
          </span>{" "}
          <FontAwesomeIcon icon={faTrash} />
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
          {item.duration.To} - {item.duration.From}
        </Col>
      </Row>
    </Container>
  );
}
