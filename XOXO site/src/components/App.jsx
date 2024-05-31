import { useState } from 'react'
import PlayGround from './PlayGround'
import TopPlayers from './TopPlayers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 style={{padding : "10px", borderRadius : "10px", color : 'white',textAlign: 'center'}}>Tic-Tac-Toe</h1>
      <button>start</button>
      <button>SCORES</button>
      <PlayGround player1name={"Mehrbod"} player2name={"Slim"}/>
      <TopPlayers />
    </>
  )
}

export default App
