import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./App.css";
import logo from "./assets/logo.png";
import { Row, Col } from "react-bootstrap";

import { add } from "./stringCalculator";

//components
import InputComp from "./Components/Input";
import BtnComp from "./Components/Button";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    console.log("h");
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    console.log("handleCalculate");
    try {
      const sum = add(input);
      setResult(sum);
      setError(null); // Clearing any previous error
    } catch (err) {
      setError(err.message);
      setResult(null); // Clearing previous result if there's an error
    }
  };
  return (
    <Row className="justify-content-center align-items-center vh-100">
      <Col lg={4} md={6} sm={12}>
        <div className="d-flex mb-3">
          <div className="fs-4 fw-bold text-primary">String Calculator</div>
          <img src={logo} height={40} className="ms-auto" />
        </div>
        <InputComp
          classes={"form-control"}
          inputType={"text"}
          placeHolder={"Do your calculation ..."}
          onChange={handleInputChange}
        />
        <BtnComp
          BtnType={"button"}
          BtnClasses={"btn btn-dark mt-3 w-100"}
          BtnName={"Calculate"}
          onClick={handleCalculate}
        />
        {result !== null && (
          <div className="mt-3 fs-5 fw-semibold test-success">
            <h2>Result: {result}</h2>
          </div>
        )}
        {error && (
          <div className="mt-3 fs-5 text-danger fw-semibold">
            Error: {error}
          </div>
        )}
      </Col>
    </Row>
  );
}

export default App;
