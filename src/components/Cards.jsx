import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then(setHotel)
      .catch(console.error);
  }, []);

  
  return (
    <Container className="my-5">
      <Row className="g-4">
        {hotel.map((eachHotel) => (
          <Col key={eachHotel.id} xs={12} sm={6} md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={eachHotel.image}
                alt={eachHotel.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{eachHotel.name}</Card.Title>
                <Card.Text>{eachHotel.location}</Card.Text>
                <Button
                  variant="primary"
                  href={eachHotel.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
