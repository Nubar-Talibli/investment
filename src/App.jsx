import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {

  const [formData, setformData] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 7,
    duration: 10
  })

  function handleChange(name, value) {
    setformData(prev=>{
      return ({
        ...prev,
        [name]: value == ''?'':Number(value)
      })
    })
  }

  const isValid = formData.duration > 0 && formData.initialInvestment >= 0 && formData.annualInvestment >= 0 && formData.expectedReturn >= 0

  return (
  <>
    <Header></Header>
    <UserInput formData={formData} onchange={handleChange}></UserInput>
    {
      isValid?
      <Result data={formData}></Result>
      :
      <p className="center">Enter valid value</p>
    }
  </>
  )
}

export default App
