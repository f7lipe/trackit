import WeekDay from "./Weekday"
import styled from "styled-components"

const weekdays = {
    'Domingo': 'D',
    'Segunda-feira': 'S',
    'Terça-feira': 'T',
    'Quarta-feira': 'Q',
    'Quinta-feira': 'Q',
    'Sexta-feira': 'S',
    'Sábado-feira': 'S'
}

function Weekdays() {
    return (
        <Days>
            {
                Object.values(weekdays).map(day => {
                    return <WeekDay day={day} />
                })
            }
        </Days>
    )
}

const Days = styled.div`
display: flex;
justify-content: space-around;
`

export default Weekdays