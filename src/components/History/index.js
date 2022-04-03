import { Calendar } from "react-calendar"
import styled from "styled-components"
import 'react-calendar/dist/Calendar.css';

function History() {
    return (
        <Main>
            <ViewLabel>Em breve você poderá acompanhar o histórico dos seus hábitos</ViewLabel>
            {
                <Calendar></Calendar>
            }
        </Main>
    )
}

const Main = styled.main`
padding: 20px;
margin-top: 90px;
margin-bottom: 70px;
`
const ViewLabel = styled.h1`
color: #9A9A9A;
font-size: 18px;
font-weight: 700;
margin-bottom: 20px;
`
export default History