import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer(){
    return(
        <ToolBar>
            <Item>Hábitos</Item>
            <ProgressBar>
            <CircularProgressbar value={60} text={`${'Hoje'}`} background         styles={buildStyles({
          backgroundColor: "rgb(247, 247, 247)",
          textColor: "#FF3B30",
          pathColor: "#FF3B30",
          trailColor: "transparent"
        })} />
            </ProgressBar>
           <Item>Histórico</Item> 
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
font-weight: 400;
color: rgb(234, 77, 61);
`
const ProgressBar = styled.div`
width: 90px;
height; 90px;
margin-bottom: 50px;
`

export default Footer