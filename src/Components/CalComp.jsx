import { useState } from "react";
import logo from "../assets/logo.png";
import { Row, Col, Form } from "react-bootstrap";
import { add } from "../__tests__/helperFunctions/stringCalculator";

//components
import InputComp from "../Components/Input";
import BtnComp from "../Components/Button";

const CalComp = () => {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    const formattedText = inputVal.replace(/\\n/g, "\n");
    console.log(formattedText);

    try {
      const sum = add(formattedText);

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
        <Form onSubmit={handleCalculate}>
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
            BtnType={"submit"}
            BtnClasses={"btn btn-dark mt-3 w-100"}
            BtnName={"Calculate"}
          />
          {result !== null && (
            <div className="mt-3 fs-5 fw-semibold text-success">
              Result: {result}
            </div>
          )}
          {error && (
            <div className="mt-3 fs-5 text-danger fw-semibold">
              Error: {error}
            </div>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default CalComp;
