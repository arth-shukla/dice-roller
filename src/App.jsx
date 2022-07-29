import './App.css';
import DicePanel from './components/DicePanel/DicePanel'
import Roller from './components/Roller/Roller'
import { ThemeProvider } from 'react-bootstrap';

function App() {

  return <ThemeProvider>
    <div className="App">
      <header>
        <h1>Dice Roller</h1>
      </header>
      <body>
        <Roller>
          {[4, 6, 8, 10, 12, 20].map((diceNum) => {
            return <DicePanel id={`d${diceNum}`} dice={`d${diceNum}`} diceNum={diceNum} />
          })}
        </Roller>
      </body>
      <footer>
        Authored by Arth Shukla
      </footer>
    </div>
  </ThemeProvider>
}

export default App
