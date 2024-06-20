import { useState } from "react";
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        // 업데이트된 상태는 반드시 이전 상태를 기반으로 해야한다
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                // newValue 앞에 + 연산자를 추가하면서 문자열을 숫자로 변환하겠다 강제함
                [inputIdentifier]: +newValue
            };
        });

    }

    return (
        <>
            <Header />
            <UserInput
                userInput={userInput}
                onChange={handleChange}
            />
            {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
            { inputIsValid && <Results input={userInput} /> }
        </>
    )
}

export default App
