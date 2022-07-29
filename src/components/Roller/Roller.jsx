import './Roller.css'

function Roller(props) {

    let { children, ...rest } = props
    return <div id {...rest}>
        {children}
    </div>
}

export default Roller