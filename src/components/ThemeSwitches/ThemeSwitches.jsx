import './ThemeSwitches.scss'

function ThemeSwitch({ changeTheme, darkMode, ...rest }) {
	return (
		<button
			id={darkMode ? 'moon-dark-switch' : 'sun-dark-switch'}
			class='switch dark-switch'
			onClick={changeTheme}
			{...rest}
		>
			<svg
				width='30'
				height='30'
				viewBox='0 0 30 30'
				aria-hidden={true}
			>
				<circle
					cx='15'
					cy='15'
					r={darkMode ? 12 : 6}
					id='moon'
					mask='url(#moon-mask)'
				/>
				<mask id='moon-mask'>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
					/>
					<circle
						cx='24'
						cy='14'
						r='12'
					/>
				</mask>
				<g mask='url(#dots-mask)'>
					{/* top */}
					<circle
						cx='5'
						cy='15'
						r='2'
						id='spot-1'
					/>
					{/* left */}
					<circle
						cx='10'
						cy='23.66'
						r='2'
						id='spot-2'
					/>
					<circle
						cx='20'
						cy='23.66'
						r='2'
						id='spot-3'
					/>
					{/* right */}
					<circle
						cx='10'
						cy='6.4'
						r='2'
						id='spot-4'
					/>
					<circle
						cx='20'
						cy='6.4'
						r='2'
						id='spot-5'
					/>
					{/* bottom */}
					<circle
						cx='25'
						cy='15'
						r='2'
						id='spot-6'
					/>
				</g>
				<mask id='dots-mask'>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
						fill='white'
					/>
					<circle
						cx='15'
						cy='15'
						r='8'
						fill='black'
					/>
				</mask>
			</svg>
			{/* <div key="dark-switch-targ" className='targ'></div>
        <div key="dark-switch-cover" className='cover'></div> */}
		</button>
	)
}

function ColorSwitch({ changeColor, color, ...rest }) {
	return (
		<button
			className='switch color-switch'
			onClick={changeColor}
			{...rest}
		>
			<div
				aria-hidden={true}
				key='color-switch-targ'
				id={'targ-' + (color === 0 ? 'default' : 'pink')}
				className='targ'
			></div>
		</button>
	)
}

export { ThemeSwitch, ColorSwitch }
