import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function App() {
  const pizzas = [
    {
      name: "Margherita Pizza",
      oldPrice: "$20.00",
      price: "$14.00",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
      sale: true,
    },
    {
      name: "Pepperoni Pizza",
      oldPrice: "$22.00",
      price: "$17.00",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
      sale: false,
    },
    {
      name: "Hawaiian Pizza",
      oldPrice: "$19.00",
      price: "$16.00",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80",
      sale: true,
    },
    {
      name: "Pesto Pizza",
      oldPrice: "$23.00",
      price: "$17.00",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80",
      sale: true,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#303030",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* NAVBAR */}
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#222",
          minHeight: "55px",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Pizza House
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  size="sm"
                  style={{
                    backgroundColor: "#333",
                    border: "1px solid #666",
                    color: "white",
                    width: "110px",
                  }}
                />
              </Form>

              <Button
                variant="danger"
                size="sm"
                style={{
                  width: "35px",
                  height: "30px",
                }}
              >
                <i className="bi bi-cart"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <section
        id="home"
        style={{
          height: "260px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "25px 45px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Neapolitan Pizza
          </h1>

          <p style={{ margin: 0 }}>
            Authentic Italian taste in every bite
          </p>
        </div>
      </section>

      {/* MENU */}
      <section
        id="about"
        style={{
          padding: "30px 15px 60px",
        }}
      >
        <Container>
          <h2
            className="text-center"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginBottom: "28px",
            }}
          >
            Our Menu
          </h2>

          <Row className="g-3">
            {pizzas.map((pizza, index) => (
              <Col xs={12} sm={6} md={3} key={index}>
                <Card
                  style={{
                    backgroundColor: "#292929",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    overflow: "hidden",
                    boxShadow: "0 3px 7px rgba(0,0,0,0.4)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={pizza.image}
                      style={{
                        height: "105px",
                        objectFit: "cover",
                      }}
                    />

                    {pizza.sale && (
                      <span
                        style={{
                          position: "absolute",
                          top: "5px",
                          left: "5px",
                          backgroundColor: "#ffd400",
                          color: "#222",
                          padding: "2px 6px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        SALE
                      </span>
                    )}
                  </div>

                  <Card.Body
                    className="d-flex flex-column"
                    style={{
                      padding: "10px",
                    }}
                  >
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {pizza.name}
                    </Card.Title>

                    <div className="text-center mb-2">
                      <span
                        style={{
                          color: "#888",
                          textDecoration: "line-through",
                          fontSize: "11px",
                          marginRight: "7px",
                        }}
                      >
                        {pizza.oldPrice}
                      </span>

                      <span
                        style={{
                          color: "#ffd400",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {pizza.price}
                      </span>
                    </div>

                    <Button
                      variant="dark"
                      size="sm"
                      className="mt-auto"
                      style={{
                        border: "none",
                        backgroundColor: "#20252a",
                        fontSize: "11px",
                      }}
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* BOOK TABLE */}
      <section
        id="contact"
        style={{
          padding: "0 15px 35px",
        }}
      >
        <Container>
          <h2
            className="text-center"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginBottom: "28px",
            }}
          >
            Book Your Table
          </h2>

          <Form style={{ maxWidth: "700px", margin: "auto" }}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Label
                  style={{
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Your Name *
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  size="sm"
                  style={{
                    backgroundColor: "#292929",
                    border: "1px solid #555",
                    color: "white",
                  }}
                />
              </Col>

              <Col md={4}>
                <Form.Label
                  style={{
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Date *
                </Form.Label>

                <Form.Control
                  type="date"
                  size="sm"
                  style={{
                    backgroundColor: "#292929",
                    border: "1px solid #555",
                    color: "white",
                  }}
                />
              </Col>

              <Col md={4}>
                <Form.Label
                  style={{
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Select a Service *
                </Form.Label>

                <Form.Select
                  size="sm"
                  style={{
                    backgroundColor: "#292929",
                    border: "1px solid #555",
                    color: "white",
                  }}
                >
                  <option>Choose service...</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Birthday</option>
                  <option>Private Party</option>
                </Form.Select>
              </Col>

              <Col xs={12}>
                <div
                  className="text-center"
                  style={{
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  Please share your message
                </div>

                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message..."
                  style={{
                    backgroundColor: "#292929",
                    border: "1px solid #555",
                    color: "white",
                    resize: "vertical",
                  }}
                />
              </Col>

              <Col xs={12} className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#ffd400",
                    color: "#222",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "11px",
                    padding: "7px 18px",
                  }}
                >
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default App;