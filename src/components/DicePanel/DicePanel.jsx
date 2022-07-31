import React, { useState } from 'react'
import { Alert, Button, Stack, InputGroup, Form, ButtonGroup } from 'react-bootstrap';
import DiceImage from '../../assets/DiceImage'
import Cell from '../Cell/Cell'
import './DicePanel.scss'

function DiceRollButton({ i, setRolls, diceNum, buttonText, addRoll, ...rest }) {
    return <Button
        size="sm"
        {...rest}
        onClick={() => {
            if (i >= 0) {
                let rollsArr = [...Array(i+1)].map(_=>Math.ceil(Math.random()*(diceNum)))
                let rollTotal = (i === 0) ? rollsArr[0] : rollsArr.reduce((a, b) => a + b, 0)
                setRolls(rollTotal)
                addRoll({ dice: `${i+1}d${diceNum}`, roll: rollTotal + ((i === 0) ? '' : ` = ${rollsArr.join(' + ')}`) })
            }
        }}
    >
        {buttonText}
    </Button>
}

function DiceRollButtonGroup({ setRolls, diceNum, addRoll }) {
    return <ButtonGroup vertical>
        <ButtonGroup>
            {Array(4).fill(0).map((x, i) => {
                return <DiceRollButton i={i} setRolls={setRolls} diceNum={diceNum} buttonText={i+1+`d${diceNum}`} className="roll-button" variant="outline-primary" addRoll={addRoll}/>
            })}
        </ButtonGroup>
        <ButtonGroup>
            {Array(4).fill(0).map((x, i) => {
                return <DiceRollButton i={i+4} setRolls={setRolls} diceNum={diceNum} buttonText={i+5+`d${diceNum}`} className="roll-button" variant="outline-primary" addRoll={addRoll}/>
            })}
        </ButtonGroup>
    </ButtonGroup>
}

function DicePanel(props) {
    const [rolls, setRolls] = useState('')
    const [customRolls, setCustomRolls] = useState(1)
    return <Cell className="dice-pane" {...props}>
        <Stack className="roll-controls" direction="horizontal" gap={4}>
            <DiceImage dice={props.dice} />
            <DiceRollButtonGroup setRolls={setRolls} diceNum={props.diceNum} addRoll={props.addRoll} />
        </Stack>
        <Stack direction="horizontal" gap={3}>
            <Alert size="sm" key={'info'} variant={'info'} style={{ opacity: (rolls) ? 100 : 0 }}>
                {rolls}
            </Alert>
            <Stack className="ms-auto" direction="horizontal" gap={2}>
                <InputGroup size="sm" className="custom-roll-val">
                    <InputGroup.Text>#</InputGroup.Text>
                    <Form.Control
                        placeholder="#"
                        aria-label={`Enter a custom number of ${props.dice} to roll.`}
                        value={customRolls}
                        onChange={e=> {
                            let val = e.target.value
                            if (val >= 100)
                                setCustomRolls(99)
                            else if (val <= 0 && val.length !== 0)
                                setCustomRolls(1)
                            else
                                setCustomRolls(val)
                        }}
                        max={100}
                    />
                </InputGroup>
                <DiceRollButton i={customRolls-1} setRolls={setRolls} diceNum={props.diceNum} buttonText='Roll' variant="primary" addRoll={props.addRoll} />
            </Stack>
        </Stack>
    </Cell>
}

export default DicePanel