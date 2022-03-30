import styled from "styled-components"

function History() {
    return (
        <Main>
            <ViewLabel>
                Em breve você poderá ver o histórico dos seus hábitos aqui. 
            </ViewLabel>
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
`
export default History