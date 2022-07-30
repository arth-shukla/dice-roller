import './Roller.scss'

function Roller(props) {

    let { children, ...rest } = props
    return <div id="dice-wrapper" {...rest}>
        {children}
    </div>
}

export default Roller