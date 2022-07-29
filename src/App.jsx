import './App.css';
import Dice from './components/Dice/Dice'
import Roller from './components/Roller/Roller'
import { Container, ThemeProvider } from 'react-bootstrap';

function App() {

  return <ThemeProvider>
    <div className="App">
      <header>
        <h1>Dice Roller</h1>
      </header>
      <body>
        <Roller id="dice-wrapper">
          {[4, 6, 8, 10, 12, 20].map((diceNum) => {
            return <Dice id={`d${diceNum}`} dice={`d${diceNum}`} diceNum={diceNum} />
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
