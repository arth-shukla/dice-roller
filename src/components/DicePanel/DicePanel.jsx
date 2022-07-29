import React, { useState } from 'react'
import { Alert, Button, Stack, InputGroup, Form, ButtonGroup } from 'react-bootstrap';
import DiceImage from '../../assets/DiceImage'
import './DicePanel.css'

function DiceRollButton({ i, setRolls, diceNum, buttonText, ...rest }) {

    return <Button
        size="sm"
        {...rest}
        onClick={() => {
            let rollsArr = [...Array(i+1)].map(_=>Math.ceil(Math.random()*(diceNum)))
            if (i === 0) {
                setRolls(rollsArr[0])
            } else {
                setRolls(`${rollsArr.reduce((a, b) => a + b, 0)} = ${rollsArr.join(' + ')}`)
            }
        }}
    >
        {buttonText}
    </Button>
}

function DiceRollButtonGroup({ setRolls, diceNum }) {
    return <ButtonGroup vertical>
        <ButtonGroup>
            {Array(4).fill(0).map((x, i) => {
                return <DiceRollButton i={i} setRolls={setRolls} diceNum={diceNum} buttonText={i+1+`d${diceNum}`} className="roll-button" variant="outline-primary"/>
            })}
        </ButtonGroup>
        <ButtonGroup>
            {Array(4).fill(0).map((x, i) => {
                return <DiceRollButton i={i+4} setRolls={setRolls} diceNum={diceNum} buttonText={i+5+`d${diceNum}`} className="roll-button" variant="outline-primary"/>
            })}
        </ButtonGroup>
    </ButtonGroup>
}

function DicePanel(props) {
    const variant = 'info'
    const [rolls, setRolls] = useState('')
    const [customRolls, setCustomRolls] = useState(1)
    return <div className="dice-pane" {...props}>
        <Stack className="roll-controls" direction="horizontal" gap={2}>
            <DiceImage dice={props.dice} />
            <DiceRollButtonGroup setRolls={setRolls} diceNum={props.diceNum} />
        </Stack>
        <Stack direction="horizontal" gap={3}>
            <Alert size="sm" key={variant} variant={variant} style={{ opacity: (rolls) ? 100 : 0 }}>
                {rolls}
            </Alert>
            <Stack className="ms-auto" direction="horizontal" gap={2}>
                <InputGroup size="sm" className="custom-roll-val">
                    <InputGroup.Text>#</InputGroup.Text>
                    <Form.Control
                        placeholder="#"
                        aria-label={`Enter a custom number of ${props.dice} to roll.`}
                        value={customRolls}
                        onChange={e=>setCustomRolls(e.target.value)}
                    />
                </InputGroup>
                <DiceRollButton i={customRolls-1} setRolls={setRolls} diceNum={props.diceNum} buttonText={'Roll'} variant="primary"/>
            </Stack>
        </Stack>
    </div>
}

export default DicePanel