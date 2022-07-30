import { useState } from 'react'
import DicePanel from './components/DicePanel/DicePanel'
import RollHistory from './components/RollHistory/RollHistory'
import Roller from './components/Roller/Roller'
import { ThemeProvider } from 'react-bootstrap';

import './App.scss';

function App() {

  const [rolls, setRolls] = useState([])

  function addRoll(roll) {
    setRolls([roll].concat(rolls))
  }

  return <ThemeProvider>
      <header>
        <h1>Dice Roller</h1>
      </header>
      <div className='roller-ui'>
        <Roller>
          {[4, 6, 8, 10, 12, 20].map((diceNum) => {
            return <DicePanel id={`d${diceNum}`} dice={`d${diceNum}`} diceNum={diceNum} addRoll={addRoll} />
          })}
        </Roller>
        <RollHistory rolls={rolls} />
      </div>
      {/* <footer>
        Authored by Arth Shukla
      </footer> */}
  </ThemeProvider>
}

export default App
