import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import { useState } from "react";


function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 15000,
    annualInvestment : 1500,
    expectedReturn : 1500,
    duration : 6,
  });

  function handleChangeInput(identifier , newValue){
    console.log(identifier , newValue , 'funziona')

    setUserInput((prevUserInput) => { return {
      ...prevUserInput,
      [identifier] : newValue
      }

    })
  }
  return (
    <>
      <Header />
      <Main
        userInput={userInput}
        change={handleChangeInput}
      />
    </>
  )
}

export default App
