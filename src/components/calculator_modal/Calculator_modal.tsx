import { useState } from "react";
//import "./App.css";
import styles from "./Calculator_modal.module.scss";

function Calculator() {
  //TODO: implement the on/off button
  const [isOn, setIsOn] = useState<boolean>(true);
  // TODO: implement logic of the calculator interface!
  const [currentInput, setCurrentInput] = useState<string>("");
  const [prevInput, setPrevInput] = useState<string>("");
  const [dec, setDec] = useState<boolean>(false);
  const handleButtonClick = (value: string) => {
    const lastChar = currentInput.charAt(currentInput.length - 1);

    if (value === "C") {
      setCurrentInput("");
      setPrevInput("");
    } else if (value === "=") {
      const result = eval(currentInput);
      setCurrentInput(result.toString());
      setPrevInput(currentInput + value + result.toString());
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (!["+", "-", "*", "/"].includes(lastChar)) {
        setCurrentInput(currentInput + value);
        setDec(false);
      }
    } else if (value === ".") {
      if (currentInput === "") {
        setCurrentInput(currentInput + "0.");
      }
      if (currentInput !== "" && !currentInput.includes(".")) {
        setCurrentInput(currentInput + value);
      }
    } else {
      setCurrentInput(currentInput + value);
    }
  };
  const handleOnClick = () => {
    setIsOn(!isOn);
    setCurrentInput("");
    setPrevInput("");
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>Benny's Calculator</h1>
      <div className={styles.header}>
        <p>{prevInput}</p>
      </div>
      <input
        data-testid="display"
        className={styles.displayTab}
        type="text"
        disabled
        value={currentInput}
        style={
          isOn ? { backgroundColor: "#24B3A8" } : { backgroundColor: "#1D8D84" }
        }
      />

      <div className={styles.btn_container}>
        <button
          className={`${styles.btn} ${styles.on}`}
          
          onClick={() => handleOnClick()}
        >
          {isOn ? "ON" : "OFF"}
        </button>
        <button
          data-testid="btn-clear"
          className={`${styles.btn} ${styles.wide}`}
          onClick={() => handleButtonClick("C")}
          disabled={!isOn}
        >
          C
        </button>
        <button
          data-testid="btn-div"
          className={styles.btn}
          onClick={() => handleButtonClick("/")}
          disabled={!isOn}
        >
          /
        </button>

        <button
          data-testid="btn-7"
          className={styles.btn}
          onClick={() => handleButtonClick("7")}
          disabled={!isOn}
        >
          7
        </button>
        <button
          data-testid="btn-8"
          className={styles.btn}
          onClick={() => handleButtonClick("8")}
          disabled={!isOn}
        >
          8
        </button>
        <button
          data-testid="btn-9"
          className={styles.btn}
          onClick={() => handleButtonClick("9")}
          disabled={!isOn}
        >
          9
        </button>
        <button
          data-testid="btn-mul"
          className={styles.btn}
          onClick={() => handleButtonClick("*")}
          disabled={!isOn}
        >
          *
        </button>

        <button
          data-testid="btn-4"
          className={styles.btn}
          onClick={() => handleButtonClick("4")}
          disabled={!isOn}
        >
          4
        </button>
        <button
          data-testid="btn-5"
          className={styles.btn}
          onClick={() => handleButtonClick("5")}
          disabled={!isOn}
        >
          5
        </button>
        <button
          data-testid="btn-6"
          className={styles.btn}
          onClick={() => handleButtonClick("6")}
          disabled={!isOn}
        >
          6
        </button>
        <button
          data-testid="btn-sub"
          className={styles.btn}
          onClick={() => handleButtonClick("-")}
          disabled={!isOn}
        >
          -
        </button>

        <button
          data-testid="btn-1"
          className={styles.btn}
          onClick={() => handleButtonClick("1")}
          disabled={!isOn}
        >
          1
        </button>
        <button
          data-testid="btn-2"
          className={styles.btn}
          onClick={() => handleButtonClick("2")}
          disabled={!isOn}
        >
          2
        </button>
        <button
          data-testid="btn-3"
          className={styles.btn}
          onClick={() => handleButtonClick("3")}
          disabled={!isOn}
        >
          3
        </button>
        <button
          data-testid="btn-add"
          className={styles.btn}
          onClick={() => handleButtonClick("+")}
          disabled={!isOn}
        >
          +
        </button>

        <button
          data-testid="btn-0"
          className={styles.btn}
          onClick={() => handleButtonClick("0")}
          disabled={!isOn}
        >
          0
        </button>
        <button
          data-testid="btn-eval"
          className={styles.btn}
          onClick={() => handleButtonClick("=")}
          disabled={!isOn}
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick(".")}
          className={styles.btn}
          disabled={!isOn}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
