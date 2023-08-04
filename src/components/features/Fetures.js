import React from "react";
import "./fetures.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Fetures = () => {
  return (
    <Container className="fourth-sec">
      <Row>
        <Col>
          <h3>App Features:</h3>
        </Col>
      </Row>

      <Row className="integerate">
        <Col lg={1} md={1} sm={1} className="number">
          1
        </Col>
        <Col lg={11} md={11} sm={11} className="headlines">
          <h4>• Integrated with all website's builder </h4>
          <p>allowing merchants to manage their store and app from one app.</p>
        </Col>
      </Row>
      <Row className="integerate">
        <Col lg={1} md={1} sm={1} className="number">
          2
        </Col>
        <Col lg={11} md={11} sm={11} className="headlines">
          <h4>• Customer Reviews </h4>
          <p>
            Our app allows merchants to easily collect and display customer
            reviews,increasing trust and social proof for their store.
          </p>
        </Col>
      </Row>
      <Row className="integerate">
        <Col lg={1} md={1} sm={1} className="number">
          3
        </Col>
        <Col lg={11} md={11} sm={11} className="headlines">
          <h4>• All - in -one </h4>
          <p>you can find all apps in one place without searching too much. </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Fetures;
