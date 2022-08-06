import { useEffect, useState } from 'react'
import { ColorSwitch, DarkModeSwitch } from '@arth-shukla/my-icons'
import Roller from './components/Roller/Roller'
import DicePanel from './components/DicePanel/DicePanel'
import RollHistory from './components/RollHistory/RollHistory'
import { Stack } from 'react-bootstrap'

import './App.scss'

const themeColors = ['blue', 'pink']

function App() {
	const [rolls, setRolls] = useState([])
	function addRoll(roll) {
		setRolls([roll].concat(rolls))
	}

	const [appModeDark, setAppModeDark] = useState(false)
	const [appColor, setAppColor] = useState(0)

	const changeTheme = () => {
		let temp = !appModeDark
		document.documentElement.setAttribute('data-theme', temp ? 'dark' : 'light')
		window.localStorage.setItem('data-theme', temp ? 'dark' : 'light')
		setAppModeDark(!appModeDark)
	}

	const changeColor = () => {
		let temp = (appColor + 1) % 2
		document.documentElement.setAttribute('data-theme-color', themeColors[temp])
		window.localStorage.setItem('data-theme-color', themeColors[temp])
		setAppColor(temp)
	}

	useEffect(() => {
		if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-theme', 'dark')
			window.localStorage.setItem('data-theme', 'dark')
			setAppModeDark(true)
		}

		let storageDataThemeColor = window?.localStorage.getItem('data-theme-color')
		if (storageDataThemeColor) {
			document.documentElement.setAttribute('data-theme-color', storageDataThemeColor)
			setAppColor(themeColors.indexOf(storageDataThemeColor))
		}
	}, [])

	return (
		<div
			id='app-container'
			className={themeColors[appColor] + (appModeDark ? '-dark' : '')}
		>
			<header>
				<h1>Dice Roller</h1>
				<Stack
					className='theme-controls'
					direction='horizontal'
					gap={1}
				>
					<ColorSwitch
						color={appColor}
						colors={Array(2).fill('var(--primary)')}
						onClick={changeColor}
						aria-label={`Switch app color theme to ${themeColors[(appColor + 1) % themeColors.length]}.`}
						aria-live='polite'
					/>
					<DarkModeSwitch
						darkMode={appModeDark}
						onClick={changeTheme}
						aria-label={`Switch app to ${appModeDark ? 'light' : 'dark'} mode.`}
						aria-live='polite'
					/>
				</Stack>
			</header>
			<content>
				<div className='roller-ui'>
					<Roller>
						{[4, 6, 8, 10, 12, 20].map(diceNum => {
							return (
								<DicePanel
									id={`d${diceNum}`}
									dice={`d${diceNum}`}
									diceNum={diceNum}
									addRoll={addRoll}
								/>
							)
						})}
					</Roller>
					<RollHistory rolls={rolls} />
				</div>
			</content>
		</div>
	)
}

export default App
