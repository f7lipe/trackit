import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
import evaluateProgess from "../../functions/evaluateProgress";
function Footer(props) {
    const { currentPage, progress } = props

    const [selectedPage, setSelectedPage] = useState(1)
    function switchPage(pageIndex) {
        currentPage(pageIndex)
        setSelectedPage(pageIndex)
    }

    const percentProgress = evaluateProgess(progress.done, progress.today)
    
    return (
        <ToolBar>
            <Item onClick={() => switchPage(0)} selected={selectedPage === 0}>Hábitos</Item>

            <ProgressBar onClick={() => switchPage(1)} hasHabits={percentProgress > 0 }>
                <CircularProgressbar strokeWidth={4}
                    value={percentProgress}
                    text={`Hoje`}
                    background={true}
                    styles={buildStyles({
                        backgroundColor: `rgb(247, 247, 247)`,
                        textColor: `${selectedPage === 1 ? `#FF3B30` : `gray`} `,
                        pathColor: `${selectedPage === 1 ? `#FF3B30` : `gray`} `,
                        trailColor: "transparent"
                    })} />
            </ProgressBar>

            <Item onClick={() => switchPage(2)} selected={selectedPage === 2}>Histórico</Item>
        </ToolBar>
    )
}

const ToolBar = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
height: 80px;
background-color: rgb(247, 247, 247);
display: flex;
align-items: center;
justify-content: space-between; 
color: rgb(234, 77, 61);
padding: 20px;
`
const Item = styled.p`
font-family: 'Recursive', sans-serif;
font-style: normal;
font-size: medium;
width: 80px;
font-weight:  ${props => props.selected ? `800` : `400`};
color: ${props => props.selected ? `rgb(234, 77, 61)` : `gray`};
`
const ProgressBar = styled.div`
width: 90px;
height: 90px;
margin-bottom: ${props => props.hasHabits ? '50px' : '0'};
`

export default Footer