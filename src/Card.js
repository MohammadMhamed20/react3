import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardPage({ data }) {
  return (
    <Card style={{ width: "18rem" }} className="card1">
      <Card.Img variant="top" src={data.data().imgUrl} />
      <Card.Body>
        <Card.Title>{data.data().name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Inventory: {data.data().inventory}</ListGroup.Item>
        <ListGroup.Item>price: {data.data().price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="./">Delete</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default CardPage;
