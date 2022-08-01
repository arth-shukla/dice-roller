import { useState } from 'react'
import DicePanel from './components/DicePanel/DicePanel'
import RollHistory from './components/RollHistory/RollHistory'
import Roller from './components/Roller/Roller'
import { LightDarkSwitch, LightColorSwitch } from './components/ThemeSwitches/ThemeSwitches'

import './App.scss';
import './bootstrap-override.scss'
import { Stack } from 'react-bootstrap'

function App() {
  const [rolls, setRolls] = useState([])
  function addRoll(roll) {
    setRolls([roll].concat(rolls))
  }

  const [appModeDark, setAppModeDark] = useState(false)
  const [appAltColor, setAppAltColor] = useState(false)

  return <div id="app-container" className={appModeDark ? 'app-dark' : appAltColor ? 'app-pink' : 'app-light'}>
    <header>
      <h1>Dice Roller</h1>
      <Stack className="theme-controls" direction="horizontal" gap={3}>
        <LightColorSwitch isDefault={appAltColor} setThemeMode={() => setAppAltColor(!appAltColor)} disabled={appModeDark} />
        <LightDarkSwitch isMoon={appModeDark} setThemeMode={() => setAppModeDark(!appModeDark)} />
      </Stack>
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
  </div>
}

export default App
