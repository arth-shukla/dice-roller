import './Cell.scss'

function Cell({ children, className, ...rest }) {
	return (
		<div
			className={(className || '') + ' cell'}
			{...rest}
		>
			{children}
		</div>
	)
}

export default Cell
