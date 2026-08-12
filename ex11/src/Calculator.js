import { useState } from "react";

function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = Number(first);
    const b = Number(second);

    let answer;

    switch (operator) {
      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <div>
        <label style={{ display: "inline-block", width: "70px" }}>
          First:
        </label>

        <input
          type="number"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </div>

      <div>
        <label style={{ display: "inline-block", width: "70px" }}>
          Second:
        </label>

        <input
          type="number"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>

      <div>
        <label style={{ display: "inline-block", width: "70px" }}>
          Operator:
        </label>

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <div style={{ marginTop: "10px", marginLeft: "70px" }}>
        <button onClick={calculate}>Compute</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label style={{ display: "inline-block", width: "70px" }}>
          Result:
        </label>

        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
}

export default Calculator;