import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Results from "./components/Results.jsx";

import { useState } from "react";


function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 15000,
    annualInvestment : 1500,
    expectedReturn : 6,
    duration : 10,
  });

  const validation = userInput.duration >= 1

  function handleChangeInput(identifier , newValue){
    console.log(identifier , newValue , 'funziona')

    setUserInput((prevUserInput) => { return {
      ...prevUserInput,
      [identifier] : +newValue
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
      
      <Results input={userInput}/>

      {!validation && <p className="center">Please insert a duration greater than ZERO!</p>}
    </>
  )
}

export default App
