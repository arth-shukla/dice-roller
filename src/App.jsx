import { useEffect, useState } from 'react'
import { ColorSwitch, ThemeSwitch } from './components/ThemeSwitches/ThemeSwitches'
import Roller from './components/Roller/Roller'
import DicePanel from './components/DicePanel/DicePanel'
import RollHistory from './components/RollHistory/RollHistory'
import { Stack } from 'react-bootstrap'

import './App.scss';

const themeColors = ["blue", "pink"]

function App() {
  const [rolls, setRolls] = useState([])
  function addRoll(roll) { setRolls([roll].concat(rolls)) }

  const [appModeDark, setAppModeDark] = useState(false)
  const [appColor, setAppColor] = useState(0)

  const changeTheme = () => {
    let temp = !appModeDark
    setAppModeDark(temp)
    document.documentElement.setAttribute("data-theme", temp ? "dark" : "light")
  }

  const changeColor = () => { setAppColor((appColor + 1) % 2) }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute("data-theme", "dark")
      setAppModeDark(true)
    }
  },[])

  return <div id="app-container" className={themeColors[appColor] + (appModeDark ? '-dark' : '')}>
    <header>
      <h1>Dice Roller</h1>
      <Stack className="theme-controls" direction="horizontal" gap={3}>
        <ColorSwitch color={appColor} changeColor={changeColor} />
        <ThemeSwitch darkMode={appModeDark} changeTheme={changeTheme} />
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
