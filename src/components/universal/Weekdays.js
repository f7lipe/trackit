import styled from "styled-components"
import { useState } from "react"
import WeekDay from "./Weekday"

const weekdays = {
    0 : 'D',
    1 : 'S',
    2 : 'T',
    3 : 'Q',
    4 : 'Q',
    5 : 'S',
    6 : 'S'
}

function Weekdays(props) {
    const {isSelectable, callback, days} = props
    const [selectedDay, setSelectedDay] = useState(new Set())
    
    function toggleSelection(index){
        
        const selectedDays = new Set(selectedDay)

        if (selectedDays.has(index)) selectedDays.delete(index)
        else selectedDays.add(index)
        
        setSelectedDay(selectedDays)
        callback([...selectedDays]) //atualiza selectedDays em NewHabit
    }
    
    return (
        <Days>
            {
                Object.values(weekdays).map((day, index) => {
                    return <WeekDay key={index} 
                                    isSelected={typeof days === 'undefined' ? false : days.includes(index) /* ¹. ² */} 
                                    day={day} 
                                    value={index} 
                                    selecting={(value) => toggleSelection(value)} 
                                    isSelectable={isSelectable} 
                                    />
                })
            }
        </Days>
    )
}

/* 
1 - [days] é undefined quando o componente Weekdays é utilizado no componente Habitos 
2 - Os valores de [days] coincidem com index em seu intervalo [0, 6]
*/

const Days = styled.div`
display: flex;
justify-content: space-around;
`

export default Weekdays