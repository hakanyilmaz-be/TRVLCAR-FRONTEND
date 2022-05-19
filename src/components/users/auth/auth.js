import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.css"

const Auth = () => {
  return (
    <Container fluid className="auth">
      <Row>
        <Col md={7} ></Col>
        <Col md={5}>
          <Tabs
            defaultActiveKey="login"
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
            Login Form
            </Tab>
            <Tab eventKey="register" title="Register" disabled>
            Register Key
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
