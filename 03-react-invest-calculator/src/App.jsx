import { useState } from "react";

import UserInput from "./components/UserInput"
import Result from "./components/Result"

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [inputData, setInputData] = useState(INITIAL_DATA);
  function handleUserInputChange(valueLabel, value) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [valueLabel]: +value
      };
    });
  }
  return (<main>
    <UserInput inputData={inputData} onValueChange={handleUserInputChange}></UserInput>
    <Result inputData={inputData} />
  </main>
  );
}

export default App
