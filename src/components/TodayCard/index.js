import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

function TodayHabit(props) {
    const {id, name, done, currentSequence, highestSequence, token} = props
    const [isSelected, setSelected] = useState(done)

    function manageSelection(){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${isSelected ? 'uncheck' : 'check'}`
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        
        if(isSelected){
            uncheck(URL, config)
        } else {
            chek(URL, config)
        }
    }

    function chek(URL, config){
        const promise = axios.post(URL, undefined,config)
        promise.then(()=>  setSelected(true))
    }

    function uncheck(URL, config){
       const promise = axios.post(URL, undefined, config)
       promise.then(()=>  setSelected(false))
    }

    return (
        <Card onClick={()=> manageSelection()}>
            <Container>
                <CardHeader>
                    <Title>{name}</Title>
                </CardHeader>

                <Status>Sequência atual: {currentSequence} dias</Status>
                <Status>Seu recorde: {highestSequence} dias</Status>

            </Container>
            <CheckMark selected={isSelected || done}  width="69" height="69" viewBox="0 0 69 69" xmlns="http://www.w3.org/2000/svg">
                     
                    <rect x="0.5" y="0.5" width="68" height="68" rx="34" />
                    <path d="M48.5686 20.9566C49.1694 20.3503 49.9857 20.0064 50.8392 20.0001C51.6928 19.9938 52.5141 20.3256 53.1237 20.9231C53.7333 21.5205 54.0816 22.335 54.0926 23.1885C54.1035 24.0419 53.7761 24.8651 53.182 25.4779L35.9915 46.9682C35.6962 47.2862 35.3398 47.5413 34.9437 47.7185C34.5476 47.8957 34.1198 47.9912 33.6859 47.9994C33.252 48.0076 32.821 47.9283 32.4184 47.7662C32.0159 47.6041 31.6502 47.3625 31.3431 47.0559L19.9456 35.6628C19.3399 35.0569 18.9998 34.2351 19 33.3784C19.0002 32.5216 19.3407 31.7001 19.9467 31.0944C20.5527 30.4887 21.3744 30.1486 22.2311 30.1488C23.0879 30.149 23.9094 30.4895 24.5151 31.0955L33.5292 40.1117L48.4831 21.0575C48.5103 21.0228 48.5396 20.9899 48.5708 20.9588L48.5686 20.9566Z" fill="white" />

            </CheckMark>
        </Card>
    )
}

const Container = styled.div``

const Card = styled.section`
display: flex; 

justify-content: space-between;
width: 100%;
height: 100px;
padding: 20px;
box-shadow: 0px 2px 4px rgba(10, 10, 10, 0.10);
margin-bottom: 20px;
`
const CardHeader = styled.section`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`
const Title = styled.h1`
font-size: 18px;
font-weight: 700;
color: gray;
`
const Status = styled.h4`
font-size: 15px;
font-weight: 500px;
color: gray;
margin-bottom: 7px;
`

const CheckMark = styled.svg`
rect {
    stroke: "#E7E7E7";
    fill: ${props => props.selected ? `rgba(234, 77, 61, 0.7)` : `rgba(235, 235, 235, 1)`};
}
`

export default TodayHabit