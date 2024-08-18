import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./App.css";
import logo from "./assets/logo.png";
import { Row, Col } from "react-bootstrap";

//components
import InputComp from "./Components/Input";
import BtnComp from "./Components/Button";

function App() {
  return (
    <Row className="justify-content-center align-items-center vh-100">
      <Col lg={4}>
        <div className="d-flex mb-3">
          <div className="fs-4 fw-bold text-primary">String Calculator</div>
          <img src={logo} height={40} className="ms-auto" />
        </div>
        <InputComp
          classes={"form-control"}
          inputType={"text"}
          placeHolder={"Do your calculation ..."}
        />
        <BtnComp
          BtnType={"button"}
          BtnClasses={"btn btn-dark mt-3 w-100"}
          BtnName={"Calculate"}
        />
      </Col>
    </Row>
  );
}

export default App;
