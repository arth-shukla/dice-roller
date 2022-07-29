import React, { useState } from 'react'
import './Dice.css'
import { Alert, Button, Stack, InputGroup, Form, ButtonGroup } from 'react-bootstrap';
import DiceImage from '../../assets/DiceImage'


function Dice(props) {
    const variant = 'info'
    const [result, setResult] = useState('')
    const [rolls, setRolls] = useState('')
    return <div style={{width:'467px'}} {...props}>
        <Stack className="roll-controls" direction="horizontal" gap={2}>
            <DiceImage dice={props.dice} />
            <ButtonGroup>
                {Array(8).fill(0).map((x, i) => {
                    return <Button size="sm" className="roll-button" variant="outline-primary">{i+1+props.dice}</Button>
                })}
            </ButtonGroup>
        </Stack>
        <Stack direction="horizontal" gap={3}>
            <Alert key={variant} variant={variant} style={{ width:"100%", margin: "auto" }}>
                {rolls}
            </Alert>
            <Stack className="ms-auto" direction="horizontal" gap={2}>
                <InputGroup size="sm" className="custom-roll-val">
                    <InputGroup.Text>Custom</InputGroup.Text>
                    <Form.Control
                        placeholder="#"
                        aria-label={`Enter a custom number of ${props.dice} to roll.`}
                    />
                </InputGroup>
                <Button size="sm" className="roll-button-custom" type="primary">Roll</Button>
            </Stack>
        </Stack>
    </div>
}

export default Dice