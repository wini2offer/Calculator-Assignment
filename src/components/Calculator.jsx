import React, { useState } from "react";
import "../style/calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const clearResult = () => {
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={clearResult} className="clear">
          C
        </button>
        <button onClick={() => handleClick("/")} className="operator">
          /
        </button>
        <button onClick={() => handleClick("*")} className="operator">
          *
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")} className="operator">
          -
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={calculateResult} className="equal">
          =
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")} className="dot">
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
