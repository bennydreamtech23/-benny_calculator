import {useState} from "react";
//import "./App.css";
import styles from "./Calculator_modal.module.scss"

function Calculator() {
//TODO: implement the on/off button
const [isOn, setIsOn] = useState<boolean>(true)
// TODO: implement logic of the calculator interface!
const [result, setResult] = useState<string>("");
  const [prevNumber, setPrevNumber] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleNumberClick = (num: string) => {
    if (result === "0") {
      setResult(num);
    } else {
      setResult(result + num);
    }
  };

 const handleOperatorClick = (op: string) => {
  setOperator(op);
  switch (op) {
    case "+":
    case "-":
    case "*":
    case "/":
      setPrevNumber(prevNumber + result + op);
      setResult("0");
      break;
    default:
      return;
  }
};

  const handleClearClick = () => {
    setResult("");
    setPrevNumber("");
    setOperator("");
  };

  const handleEqualsClick = () => {
    const currentNumber = result;
    let newResult = "";

    switch (operator) {
      case "+":
        newResult = (parseFloat(prevNumber) + parseFloat(currentNumber)).toString();
        break;
      case "-":
        newResult = (parseFloat(prevNumber) - parseFloat(currentNumber)).toString();
        break;
      case "*":
        newResult = (parseFloat(prevNumber) * parseFloat(currentNumber)).toString();
        break;
      case "/":
        newResult = (parseFloat(prevNumber) / parseFloat(currentNumber)).toString();
        break;
      default:
        return;
    }

    setResult(newResult);
    setPrevNumber("");
    setOperator("");
  };

const handleOnClick = () => {
    setIsOn(!isOn);
    setResult('');
  };
  
  return (
    <div className={styles.calculator}>
      <input data-testid="display" className={styles.displayTab} type="text" disabled value={result}></input>

      <div className={styles.btn_container}>
              <button className={`${styles.btn} ${styles.wide}`} onClick={() =>handleOnClick()} >{isOn ? "ON" : "OFF"}</button>
        <button data-testid="btn-clear" className={`${styles.btn} ${styles.wide}`} onClick={() => handleClearClick()} disabled={!isOn}>C</button>
        <button data-testid="btn-div" className={styles.btn}onClick={() => handleOperatorClick("/")} disabled={!isOn}>/</button>

        <button data-testid="btn-7" className={styles.btn} onClick={() => handleNumberClick("7")} disabled={!isOn}>7</button>
        <button data-testid="btn-8" className={styles.btn} onClick={() => handleNumberClick("8")} disabled={!isOn}>8</button>
        <button data-testid="btn-9" className={styles.btn} onClick={() => handleNumberClick("9")} disabled={!isOn}>9</button>
        <button data-testid="btn-mul" className={styles.btn} onClick={() => handleOperatorClick("*")} disabled={!isOn}>*</button>

        <button data-testid="btn-4" className={styles.btn} onClick={() => handleNumberClick("4")} disabled={!isOn}>4</button>
        <button data-testid="btn-5" className={styles.btn} onClick={() => handleNumberClick("5")} disabled={!isOn}>5</button>
        <button data-testid="btn-6" className={styles.btn} onClick={() => handleNumberClick("6")} disabled={!isOn}>6</button>
        <button data-testid="btn-sub" className={styles.btn} onClick={() => handleOperatorClick("-")} disabled={!isOn}>-</button>

        <button data-testid="btn-1" className={styles.btn} onClick={() => handleNumberClick("1")} disabled={!isOn}>1</button>
        <button data-testid="btn-2" className={styles.btn} onClick={() => handleNumberClick("2")} disabled={!isOn}>2</button>
        <button data-testid="btn-3" className={styles.btn} onClick={() => handleNumberClick("3")} disabled={!isOn}>3</button>
        <button data-testid="btn-add" className={styles.btn} onClick={() => handleOperatorClick("+")} disabled={!isOn}>+</button>

        <button data-testid="btn-0" className={`${styles.btn} ${styles.wide}`} onClick={() => handleNumberClick("0")} disabled={!isOn}>0</button>
        <button data-testid="btn-eval" className={styles.btn} onClick={() => handleEqualsClick()} disabled={!isOn}>=</button>
      </div>
    </div>
  );
}

export default Calculator;