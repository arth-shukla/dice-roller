import './DiceImages.scss'

function DiceImage({ dice, ...rest }) {
	const diceSVGs = {
		d4: (
			<svg
				className='dice-image'
				width='54'
				height='49'
				aria-hidden='true'
			>
				<polygon
					points='2,46.65 52,46.65 27,3.35'
					className='dice-image-poly'
				/>
				<text
					x='21'
					y='36.5'
					className='dice-image-text'
				>
					4
				</text>
			</svg>
		),
		d6: (
			<svg
				className='dice-image'
				width='54'
				height='46'
				aria-hidden='true'
			>
				<polygon
					points='6,6 6,44 44,44 44,6'
					className='dice-image-poly'
				/>
				<text
					x='19.5'
					y='31.5'
					className='dice-image-text'
				>
					6
				</text>
			</svg>
		),
		d8: (
			<svg
				className='dice-image'
				width='54'
				height='53'
				aria-hidden='true'
			>
				<polygon
					points='6,27 25,3 44,27 25,51'
					className='dice-image-poly'
				/>
				<text
					x='19.5'
					y='33'
					className='dice-image-text'
				>
					8
				</text>
			</svg>
		),
		d10: (
			<svg
				className='dice-image'
				width='54'
				height='53'
				aria-hidden='true'
			>
				<polygon
					points='6,36 25,3 44,36 25,51'
					className='dice-image-poly'
				/>
				<text
					x='16'
					y='36'
					className='dice-image-text'
				>
					10
				</text>
			</svg>
		),
		d12: (
			<svg
				className='dice-image'
				width='54'
				height='51'
				aria-hidden='true'
			>
				<polygon
					points='27,48.5 52.576,29.318 42.428,2 12.148,2 2,29.318'
					className='dice-image-poly'
				/>
				<text
					x='18'
					y='29'
					className='dice-image-text'
				>
					12
				</text>
			</svg>
		),
		d20: (
			<svg
				className='dice-image'
				width='54'
				height='47'
				aria-hidden='true'
			>
				<polygon
					points='2,23.65 14.5,45.3 39.5,45.3 52,23.65 39.5,2 14.5,2'
					className='dice-image-poly'
				/>
				<text
					x='17'
					y='29.5'
					className='dice-image-text'
				>
					20
				</text>
			</svg>
		),
	}

	return (
		<div
			{...rest}
			style={{ width: '50px', display: 'inline-block' }}
		>
			{diceSVGs[dice]}
		</div>
	)
}

export default DiceImage
