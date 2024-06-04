import { useState } from 'react'
import PlayGround from './PlayGround'
import TopPlayers from './TopPlayers'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
      
      
      <Link to={'/signupForm'} style={{backgroundColor : "rgb(186, 88, 73)",margin : "20px",padding:"10px 20px 10px 20px",textDecoration: 'none', borderRadius: '20px'}}>Start</Link>
      <Link to= {'/topScores'} style={{backgroundColor : "rgb(186, 88, 73)",textDecoration: 'none',padding:"10px 20px 10px 20px", borderRadius: '20px'}}>SCORES</Link>
    </div>
  )
}

export default App
