import { Table } from "react-bootstrap"
import Cell from "../Cell/Cell"

import './RollHistory.scss'

function RollHistory(props) {
    return <Cell className="roll-history">
        <h3>Roll History</h3>
        <Table borderless responsive className="roll-table">
            <thead>
                <tr>
                    <th class="table-dice">Dice</th>
                    <th class="table-roll">Roll</th>
                </tr>
            </thead>
            <tbody>
                {props.rolls.map((roll) => {
                    return <>
                        <tr>
                            <td class="table-dice">{roll.dice}</td>
                            <td class="table-roll">{roll.roll}</td>
                        </tr>
                    </>
                })}
            </tbody>
        </Table>
    </Cell>
}

export default RollHistory