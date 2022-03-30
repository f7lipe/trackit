import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
function Footer(props){
    const {switchPageCallback} = props

    const [selectedPage, setSelectedPage] = useState(0)
    function switchPage(pageIndex){
        switchPageCallback(pageIndex)
        setSelectedPage(pageIndex)
    }


    return(
        <ToolBar>
            <Item onClick={()=>switchPage(0)} selected={selectedPage === 0}>Hábitos</Item>
            <ProgressBar onClick={()=>switchPage(1)}>
            <CircularProgressbar value={60} text={`${'Hoje'}`} background         styles={buildStyles({
          backgroundColor: `${selectedPage === 1 ? `rgb(234, 77, 61)` : `rgb(247, 247, 247)`} `,
          textColor:  `${selectedPage === 1 ? `white` : `#FF3B30`} `,
          pathColor: `${selectedPage === 1 ? `white` : `#FF3B30`} `,
          trailColor: "transparent"
        })} />
            </ProgressBar>
           <Item onClick={()=>switchPage(2)} selected={selectedPage === 2}>Histórico</Item> 
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
font-weight:  ${props => props.selected ? `800` : `400`};
color: ${props => props.selected ? `rgb(234, 77, 61)` : `gray`};
`
const ProgressBar = styled.div`
width: 90px;
height; 90px;
margin-bottom: 50px;
`

export default Footer