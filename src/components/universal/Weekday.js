import styled from "styled-components";
import { useState } from "react";

function WeekDay(props){
    const {day, selecting, key_, isSelectable} = props
    const [selected, setSelected] = useState(false) 

    function manageClick(selectedDay){
        if (isSelectable){
            selecting(selectedDay)
            setSelected(!selected)
        }
    }

    return(<Day selected={selected} onClick={()=> manageClick(key_)}>{day}</Day>)
}

const Day = styled.div`
width: 35px;
height: 35px;
color: ${props => props.selected ? "white" :  "gray"};
background-color: ${props => props.selected ?  "#EA3D3D":  "none"};
box-shadow: ${props => props.selected ? "0px 2px 4px rgba(20, 20, 20, 0.90)" :  ""} ;
border: ${props => props.selected ? "none" :  "0.5px solid gray"};
border-radius: 50px; 
display: flex;
justify-content: center;
align-items: center;
`

export default WeekDay

