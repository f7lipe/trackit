import TodayCard from "../TodayCard"

import styled from "styled-components"

function Today() {
    return <>
    <Main>
    <ViewLabel>
           Seungda-feira, 24 de janeiro  
           <SubLabel>Nenhum hábito conclúido ainda</SubLabel>
        </ViewLabel>

        <TodayCard/>
        <TodayCard/>
        <TodayCard/>
        
    </Main>

    </>
}


const Main = styled.main`
padding: 20px;
margin-top: 90px;
margin-bottom: 70px;
`

const ViewLabel = styled.h1`
color: #FF3B30;
font-size: 18px;
font-weight: 700;
margin-bottom: 20px;
`
const SubLabel = styled.h2`
color: gray;
font-size: 16px;
font-weight: 500;
margin-top: 4px;
`



export default Today