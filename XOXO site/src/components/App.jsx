import { useState } from 'react'
import PlayGround from './PlayGround'
import TopPlayers from './TopPlayers'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Link to={'/signupForm'} style={{backgroundColor : "beige",margin : "20px"}}>Start</Link>
      <Link to= {'/topScores'} style={{backgroundColor : "beige"}}>SCORES</Link>
    </>
  )
}

export default App
