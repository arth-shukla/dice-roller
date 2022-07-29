import './App.css';
import Dice from './components/Dice/Dice'
import Roller from './components/Roller/Roller'
import { Container, ThemeProvider } from 'react-bootstrap';

function App() {

  return <ThemeProvider>
    <div className="App">
      <Container className="header" fluid>
        <h1>Dice Roller</h1>
      </Container>
      <body>

        <Roller id="dice-wrapper">
          {["d4", "d6", "d8", "d10", "d12", "d20"].map((dice) => {
            return <Dice id={dice} dice={dice} />
          })}
        </Roller>
      </body>
      <footer>

      </footer>
    </div>
  </ThemeProvider>
}

export default App
