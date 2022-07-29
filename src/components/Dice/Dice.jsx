import React, { useState } from 'react'
import './Dice.css'
import { Alert, Button, } from 'react-bootstrap';
import DiceImage from '../../assets/DiceImage'


function Dice(props) {
    const variant = 'info'
    const [result, setResult] = useState('')
    const [rolls, setRolls] = useState('')
    return <div style={{width:'100%'}} {...props}>
        <DiceImage dice={props.dice} size={"50px"} />
        {/* {Array(5).fill(0).map((x, i) => {
            return <Button className="rollButton" type="primary">{i+1}</Button>
        })} */}
        <Alert key={variant} variant={variant}>
            {rolls}
        </Alert>
    </div>
}

export default Dice