import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cards = ({ hotel }) => {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container id="cards" className="my-5">
      <Row className="g-4">
        {hotel.map((eachHotel) => (
          <Col
            key={eachHotel.id}
            xs={12} // full width on extra small screens
            sm={6} // 2 cards per row on small screens
            md={4} // 3 cards per row on medium screens
            lg={3} // 4 cards per row on large screens
          >
            <Card
              data-aos="fade-up"
              className="shadow-sm h-100 border-0 rounded-3"
            >
              <div className="overflow-hidden" style={{ height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={eachHotel.image}
                  alt={eachHotel.name}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-semibold text-truncate">
                    {eachHotel.name}
                  </Card.Title>
                  <Card.Text className="text-muted small mb-3">
                    {eachHotel.location}
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <Button
                    variant="primary"
                    href={eachHotel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2"
                  >
                    Book Now
                  </Button>
                  <h6 className="fw-bold mb-0 text-success">
                    ₹{eachHotel.rate}
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
