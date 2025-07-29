import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the frontend class</h1>
      <h2>Todays topic is introduction</h2>
      <h3>Todays date is 29.07.25</h3>
      <h3>2400032899-RevanthEshwar</h3>
      <Link to="/page1">Go to Page1</Link>
      <br/><br/>
      <Link to="/page2">Go to Page2</Link>
      <br/><br/>
      <Link to="/page3">Go to Page3</Link>
    </>
  )
}

export default App
