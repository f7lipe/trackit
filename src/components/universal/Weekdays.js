import WeekDay from "./Weekday"
import styled from "styled-components"
import { useState } from "react"

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

        if(selectedDays.has(index)) selectedDays.delete(index)
        else  selectedDays.add(index)
        
        setSelectedDay(selectedDays)
        callback([...selectedDays])
    }
    return (
        <Days>
            {
                Object.values(weekdays).map((day, index) => {
                    return <WeekDay isSelected={typeof days === 'undefined' ? false : days.includes(index)} day={day} selecting={(key_) => toggleSelection(key_)} key_={index} isSelectable={isSelectable} days={days}/>
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